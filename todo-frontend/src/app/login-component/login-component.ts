import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css'],
})
export class LoginComponent {
  username: string = 'in28minutes';
  password: string = '';
  errorMessage: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  constructor(private router: Router,
    private hardcodedAuthentication: HardcodedAuthentication
  ){}

  handleLogin() {
    console.log(this.username);
    if (this.hardcodedAuthentication.authenticate(this.username,this.password )) 
    {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
