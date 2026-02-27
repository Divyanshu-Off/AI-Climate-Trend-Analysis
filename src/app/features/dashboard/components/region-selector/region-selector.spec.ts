import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionSelector } from './region-selector';

describe('RegionSelector', () => {
  let component: RegionSelector;
  let fixture: ComponentFixture<RegionSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
