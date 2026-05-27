import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Dify {
  private apiUrl = environment.difyApiUrl;
  private apiKey = environment.difyApiKey;

  async generateMealPlan(payload: any): Promise<string> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputs: {
          pantry_items: payload.pantry,
          nutrition_goal: payload.nutritionGoal,
          cuisine: payload.cuisine,
          budget: payload.budget,
          cooking_time: payload.cookingTime,
          family_size: payload.familySize
        },
        query: payload.userMessage,
        response_mode: 'streaming',
        user: 'pantrypilot-user'
      })
    });

    if (!response.ok) {
      throw new Error(`Dify failed: ${response.status}`);
    }

    if (!response.body) {
      throw new Error('No response body from Dify');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    let buffer = '';
    let streamedAnswer = '';
    let finalCandidate = '';

    while (true) {
      const { value, done } = await reader.read();

      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split(/\r?\n/);
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (!line.startsWith('data:')) continue;

        const jsonText = line.replace(/^data:\s*/, '').trim();

        if (!jsonText || jsonText === '[DONE]') continue;

        try {
          const eventData = JSON.parse(jsonText);

          if (eventData.event === 'message') {
            streamedAnswer += eventData.answer || '';
          }

          const answer =
            eventData?.data?.outputs?.answer ||
            eventData?.data?.outputs?.text;

          if (answer) {
            finalCandidate = answer;
          }

        } catch {
          // Ignore incomplete SSE chunks
        }
      }
    }

    if (this.isValidJson(finalCandidate)) {
      return finalCandidate;
    }

    if (this.isValidJson(streamedAnswer)) {
      return streamedAnswer;
    }

    const merged = streamedAnswer || finalCandidate;

    if (!merged) {
      throw new Error('No answer received from Dify');
    }

    return merged;
  }

  private isValidJson(text: string): boolean {
    try {
      if (!text) return false;

      const cleaned = text
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();

      const firstBrace = cleaned.indexOf('{');
      const lastBrace = cleaned.lastIndexOf('}');

      if (firstBrace === -1 || lastBrace === -1) return false;

      JSON.parse(cleaned.substring(firstBrace, lastBrace + 1));
      return true;

    } catch {
      return false;
    }
  }
}
