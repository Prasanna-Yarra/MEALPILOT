import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiggyFallback } from './swiggy-fallback';

describe('SwiggyFallback', () => {
  let component: SwiggyFallback;
  let fixture: ComponentFixture<SwiggyFallback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiggyFallback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiggyFallback);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
