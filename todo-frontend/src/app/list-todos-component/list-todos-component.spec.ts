import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodosComponent } from './list-todos-component';

describe('ListTodosComponent', () => {
  let component: ListTodosComponent;
  let fixture: ComponentFixture<ListTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTodosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListTodosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
