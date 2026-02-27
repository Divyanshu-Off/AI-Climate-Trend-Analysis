import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMetrics } from './model-metrics';

describe('ModelMetrics', () => {
  let component: ModelMetrics;
  let fixture: ComponentFixture<ModelMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelMetrics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelMetrics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
