import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineIndicator } from './baseline-indicator';

describe('BaselineIndicator', () => {
  let component: BaselineIndicator;
  let fixture: ComponentFixture<BaselineIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaselineIndicator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaselineIndicator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
