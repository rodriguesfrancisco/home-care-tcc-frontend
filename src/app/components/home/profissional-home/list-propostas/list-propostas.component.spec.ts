import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropostasComponent } from './list-propostas.component';

describe('ListPropostasComponent', () => {
  let component: ListPropostasComponent;
  let fixture: ComponentFixture<ListPropostasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPropostasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
