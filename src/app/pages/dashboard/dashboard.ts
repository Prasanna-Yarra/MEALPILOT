import { ChangeDetectorRef, Component } from '@angular/core';

import { DecisionCard } from '../../components/decision-card/decision-card';
import { GroceryCart } from '../../components/grocery-cart/grocery-cart';
import { MealCard } from '../../components/meal-card/meal-card';
import { PantryInput } from '../../components/pantry-input/pantry-input';
import { ScoreCards } from '../../components/score-cards/score-cards';
import { SwiggyFallback } from '../../components/swiggy-fallback/swiggy-fallback';

import { Dify } from '../../services/dify';

@Component({
  selector: 'app-dashboard',
  imports: [
    DecisionCard,
    GroceryCart,
    MealCard,
    PantryInput,
    ScoreCards,
    SwiggyFallback
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  response: any = null;
  loading = false;
  errorMessage = '';

  constructor(
    private dify: Dify,
    private cdr: ChangeDetectorRef
  ) {}

  async onGenerate(payload: any) {
    if (this.loading) return;

    this.loading = true;
    this.errorMessage = '';
    this.response = null;
    this.cdr.detectChanges();

    try {
      const rawText = await this.dify.generateMealPlan(payload);

      console.log('Raw Dify Text:', rawText);

      const parsed = this.extractJson(rawText);

      if (!parsed) {
        this.errorMessage = 'AI response received, but JSON parsing failed.';
        return;
      }

      this.response = parsed;

    } catch (err) {
      console.error('Dify error:', err);
      this.errorMessage = 'AI response failed. Please try again.';
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  extractJson(text: string) {
    try {
      const cleaned = text
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();

      const firstBrace = cleaned.indexOf('{');
      const lastBrace = cleaned.lastIndexOf('}');

      if (firstBrace === -1 || lastBrace === -1) return null;

      return JSON.parse(cleaned.substring(firstBrace, lastBrace + 1));
    } catch (error) {
      console.error('JSON Parse Error:', error);
      return null;
    }
  }
}