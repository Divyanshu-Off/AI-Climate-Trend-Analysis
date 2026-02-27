import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainForecast } from './explain-forecast';

describe('ExplainForecast', () => {
  let component: ExplainForecast;
  let fixture: ComponentFixture<ExplainForecast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplainForecast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplainForecast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
