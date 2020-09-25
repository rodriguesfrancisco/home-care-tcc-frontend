import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAtendimentosComponent } from './list-atendimentos.component';

describe('ListAtendimentosComponent', () => {
  let component: ListAtendimentosComponent;
  let fixture: ComponentFixture<ListAtendimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAtendimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAtendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
