import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-cards',
  imports: [],
  templateUrl: './score-cards.html',
  styleUrl: './score-cards.css',
})
export class ScoreCards {
 @Input() scores: any;
}
