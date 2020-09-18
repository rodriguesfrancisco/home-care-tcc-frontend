import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMensagensComponent } from './list-mensagens.component';

describe('ListMensagensComponent', () => {
  let component: ListMensagensComponent;
  let fixture: ComponentFixture<ListMensagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMensagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMensagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
