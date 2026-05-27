import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryCart } from './grocery-cart';

describe('GroceryCart', () => {
  let component: GroceryCart;
  let fixture: ComponentFixture<GroceryCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
