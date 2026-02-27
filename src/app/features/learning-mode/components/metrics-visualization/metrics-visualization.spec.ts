import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsVisualization } from './metrics-visualization';

describe('MetricsVisualization', () => {
  let component: MetricsVisualization;
  let fixture: ComponentFixture<MetricsVisualization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetricsVisualization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricsVisualization);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
