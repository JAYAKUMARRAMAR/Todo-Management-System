import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeData } from '../service/data/welcome-data';

@Component({
  selector: 'app-welcome-component',
  standalone: false,
  templateUrl: './welcome-component.html',
  styleUrls: ['./welcome-component.css'],
})
export class WelcomeComponent implements OnInit{
 
  name='';
  welcomeMessageFromService: string | undefined;
  constructor(private route:ActivatedRoute,
    private service:WelcomeData
  ){}
  
  ngOnInit(): void {
     this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
   console.log(this.service.executeHelloWorldBeanService());
   this.service.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response));
    console.log("last line of getWelcomeMessage"); 
  }
  handleSuccessfulResponse(response:any) {
    this.welcomeMessageFromService = response.message;
  }
}
