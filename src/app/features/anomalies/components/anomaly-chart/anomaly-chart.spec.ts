import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomalyChart } from './anomaly-chart';

describe('AnomalyChart', () => {
  let component: AnomalyChart;
  let fixture: ComponentFixture<AnomalyChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnomalyChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnomalyChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
