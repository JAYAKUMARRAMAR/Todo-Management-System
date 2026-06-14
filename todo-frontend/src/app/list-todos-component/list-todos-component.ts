import { Component, OnInit } from '@angular/core';
import { TodoData } from '../service/data/todo-data';
import { Router } from '@angular/router';

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
export class ListTodosComponent implements OnInit {
  
  todos:Todo[] = [];
  message: any;
  
  constructor(private todoData: TodoData,
              private router:Router) {}
  
  ngOnInit(){
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoData.retrieveAllTodos('in28minutes').subscribe(
      response => { console.log(response);
    this.todos = response;})
  }

  deleteTodo(id:any) 
  {
     console.log(`Delete todo ${id}`);
     this.todoData.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} successful!`;
        this.refreshTodos();
      })
  }

  updateTodo(id:any) 
  {
    console.log(`Update todo ${id}`);
    this.router.navigate(['todos', id]);
  }

  // todos: Todo[] = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Angular Expert', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date()),
  // ];
}