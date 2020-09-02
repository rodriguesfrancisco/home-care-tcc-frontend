import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesPageComponent } from './solicitacoes-page.component';

describe('SolicitacoesPageComponent', () => {
  let component: SolicitacoesPageComponent;
  let fixture: ComponentFixture<SolicitacoesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacoesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacoesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
