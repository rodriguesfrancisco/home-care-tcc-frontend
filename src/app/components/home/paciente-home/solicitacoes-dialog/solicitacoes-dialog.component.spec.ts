import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesDialogComponent } from './solicitacoes-dialog.component';

describe('SolicitacoesDialogComponent', () => {
  let component: SolicitacoesDialogComponent;
  let fixture: ComponentFixture<SolicitacoesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitacoesDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacoesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
