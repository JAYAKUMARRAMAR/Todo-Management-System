import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  ngOnInit(): void 
  {
     console.log(this.message);
  }
  message:String="Some Welcome Message";
  protected readonly title = signal('todo-frontend');
}
