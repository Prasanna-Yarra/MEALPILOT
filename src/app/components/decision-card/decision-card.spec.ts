import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionCard } from './decision-card';

describe('DecisionCard', () => {
  let component: DecisionCard;
  let fixture: ComponentFixture<DecisionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
