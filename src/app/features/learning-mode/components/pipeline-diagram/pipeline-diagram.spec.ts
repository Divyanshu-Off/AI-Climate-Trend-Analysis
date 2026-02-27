import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineDiagram } from './pipeline-diagram';

describe('PipelineDiagram', () => {
  let component: PipelineDiagram;
  let fixture: ComponentFixture<PipelineDiagram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipelineDiagram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipelineDiagram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
