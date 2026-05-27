import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grocery-cart',
  imports: [],
  templateUrl: './grocery-cart.html',
  styleUrl: './grocery-cart.css',
})
export class GroceryCart {

  @Input() cart: any[] = [];

  get subtotal() {
    return this.cart.length * 60;
  }

  get deliveryFee() {
    return this.cart.length ? 29 : 0;
  }

  get total() {
    return this.subtotal + this.deliveryFee;
  }

  checkout() {
    alert('Checkout clicked. Later we can connect this to Swiggy Instamart cart.');
  }
}