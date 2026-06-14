import { Component, OnInit } from '@angular/core';
import { Todo } from '../list-todos-component/list-todos-component';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoData } from '../service/data/todo-data';

@Component({
  selector: 'app-todo-component',
  standalone: false,
  templateUrl: './todo-component.html',
  styleUrl: './todo-component.css',
})
export class TodoComponent implements OnInit{
  
  id!: number;
  todo!: Todo;
  
  constructor(private todoData: TodoData,
              private route:ActivatedRoute,
              private router:Router  ) {}
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1, '', false, new Date());
    this.todoData.retrieveTodo('in28minutes', this.id)
    .subscribe( data => this.todo = data)
  }

  saveTodo(){
    console.log(this.todo);
    this.todoData.updateTodo('in28minutes', this.id, this.todo)
    .subscribe( data => { console.log(data)
    this.router.navigate(['todos']);})
  }
}
