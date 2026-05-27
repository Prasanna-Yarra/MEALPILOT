import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryInput } from './pantry-input';

describe('PantryInput', () => {
  let component: PantryInput;
  let fixture: ComponentFixture<PantryInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantryInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantryInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
