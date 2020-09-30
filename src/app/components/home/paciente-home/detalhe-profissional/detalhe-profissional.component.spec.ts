import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProfissionalComponent } from './detalhe-profissional.component';

describe('DetalheProfissionalComponent', () => {
  let component: DetalheProfissionalComponent;
  let fixture: ComponentFixture<DetalheProfissionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheProfissionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
