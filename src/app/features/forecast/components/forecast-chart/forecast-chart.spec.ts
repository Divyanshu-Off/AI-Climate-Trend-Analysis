import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastChart } from './forecast-chart';

describe('ForecastChart', () => {
  let component: ForecastChart;
  let fixture: ComponentFixture<ForecastChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
