import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarSolicitacaoComponent } from './finalizar-solicitacao.component';

describe('FinalizarSolicitacaoComponent', () => {
  let component: FinalizarSolicitacaoComponent;
  let fixture: ComponentFixture<FinalizarSolicitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizarSolicitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
