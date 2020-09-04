import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSolicitacoesComponent } from './list-solicitacoes.component';

describe('ListSolicitacoesComponent', () => {
  let component: ListSolicitacoesComponent;
  let fixture: ComponentFixture<ListSolicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSolicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
