import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decision-card',
  imports: [],
  templateUrl: './decision-card.html',
  styleUrl: './decision-card.css',
})
export class DecisionCard {
  @Input() decision = '';
  @Input() reason = '';
  @Input() dineoutSuggestions: any[] = [];
}