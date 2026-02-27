import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateSummaryCards } from './climate-summary-cards';

describe('ClimateSummaryCards', () => {
  let component: ClimateSummaryCards;
  let fixture: ComponentFixture<ClimateSummaryCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClimateSummaryCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimateSummaryCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
