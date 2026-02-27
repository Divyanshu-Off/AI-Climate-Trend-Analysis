import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceBand } from './confidence-band';

describe('ConfidenceBand', () => {
  let component: ConfidenceBand;
  let fixture: ComponentFixture<ConfidenceBand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfidenceBand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceBand);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
