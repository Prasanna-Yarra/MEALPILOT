import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCards } from './score-cards';

describe('ScoreCards', () => {
  let component: ScoreCards;
  let fixture: ComponentFixture<ScoreCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
