import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawVsCleanData } from './raw-vs-clean-data';

describe('RawVsCleanData', () => {
  let component: RawVsCleanData;
  let fixture: ComponentFixture<RawVsCleanData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RawVsCleanData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawVsCleanData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
