import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceExplanation } from './confidence-explanation';

describe('ConfidenceExplanation', () => {
  let component: ConfidenceExplanation;
  let fixture: ComponentFixture<ConfidenceExplanation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfidenceExplanation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceExplanation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
