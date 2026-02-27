import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anomalies } from './anomalies';

describe('Anomalies', () => {
  let component: Anomalies;
  let fixture: ComponentFixture<Anomalies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Anomalies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anomalies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
