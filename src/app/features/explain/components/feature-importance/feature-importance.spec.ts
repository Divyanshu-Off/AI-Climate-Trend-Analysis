import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureImportance } from './feature-importance';

describe('FeatureImportance', () => {
  let component: FeatureImportance;
  let fixture: ComponentFixture<FeatureImportance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureImportance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureImportance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
