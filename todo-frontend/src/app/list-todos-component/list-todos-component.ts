import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos-component',
  standalone: false,
  templateUrl: './list-todos-component.html',
  styleUrls: ['./list-todos-component.css'],
})
export class ListTodosComponent {
  constructor() {}

  todos: Todo[] = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an Angular Expert', false, new Date()),
    new Todo(3, 'Visit India', false, new Date()),
  ];
}
