import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineComparison } from './baseline-comparison';

describe('BaselineComparison', () => {
  let component: BaselineComparison;
  let fixture: ComponentFixture<BaselineComparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaselineComparison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaselineComparison);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
