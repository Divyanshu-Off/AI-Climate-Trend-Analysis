import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainValidationSplit } from './train-validation-split';

describe('TrainValidationSplit', () => {
  let component: TrainValidationSplit;
  let fixture: ComponentFixture<TrainValidationSplit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainValidationSplit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainValidationSplit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
