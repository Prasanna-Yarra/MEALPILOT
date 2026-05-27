import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  imports: [],
  templateUrl: './meal-card.html',
  styleUrl: './meal-card.css',
})
export class MealCard {
@Input() meals: any[] = [];

foodImages = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
  'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600',
  'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600'
];

getImage(index: number) {
  return this.foodImages[index % this.foodImages.length];
}
}
