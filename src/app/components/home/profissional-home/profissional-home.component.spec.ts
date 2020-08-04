import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalHomeComponent } from './profissional-home.component';

describe('ProfissionalHomeComponent', () => {
  let component: ProfissionalHomeComponent;
  let fixture: ComponentFixture<ProfissionalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionalHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
