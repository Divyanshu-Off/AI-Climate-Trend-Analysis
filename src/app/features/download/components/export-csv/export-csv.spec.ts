import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCsv } from './export-csv';

describe('ExportCsv', () => {
  let component: ExportCsv;
  let fixture: ComponentFixture<ExportCsv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExportCsv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportCsv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
