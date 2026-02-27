import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPng } from './export-png';

describe('ExportPng', () => {
  let component: ExportPng;
  let fixture: ComponentFixture<ExportPng>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExportPng]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportPng);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
