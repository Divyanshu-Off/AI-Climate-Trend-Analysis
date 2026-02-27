import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelArchitecture } from './model-architecture';

describe('ModelArchitecture', () => {
  let component: ModelArchitecture;
  let fixture: ComponentFixture<ModelArchitecture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelArchitecture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelArchitecture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
