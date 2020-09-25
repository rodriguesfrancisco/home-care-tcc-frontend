import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoDialogComponent } from './atendimento-dialog.component';

describe('AtendimentoDialogComponent', () => {
  let component: AtendimentoDialogComponent;
  let fixture: ComponentFixture<AtendimentoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendimentoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendimentoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
