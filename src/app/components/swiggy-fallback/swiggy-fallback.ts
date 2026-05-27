import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-swiggy-fallback',
  imports: [],
  templateUrl: './swiggy-fallback.html',
  styleUrl: './swiggy-fallback.css',
})
export class SwiggyFallback {

  @Input() fallbackFood: any[] = [];

  foodImages = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600',
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=600',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600',
    'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600'
  ];

  getImage(index: number) {
    return this.foodImages[index % this.foodImages.length];
  }
}