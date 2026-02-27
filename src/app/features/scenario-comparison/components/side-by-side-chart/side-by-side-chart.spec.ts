import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBySideChart } from './side-by-side-chart';

describe('SideBySideChart', () => {
  let component: SideBySideChart;
  let fixture: ComponentFixture<SideBySideChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBySideChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBySideChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
