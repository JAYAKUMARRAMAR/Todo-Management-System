import { Component, OnInit } from '@angular/core';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(public hardcodedAuthentication: HardcodedAuthentication) {}
  
  ngOnInit(): void {
  this.isUserLoggedIn = this.hardcodedAuthentication.isUserLoggedIn();
  }
}
