import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { WelcomeComponent } from './welcome-component/welcome-component';
import { LoginComponent } from './login-component/login-component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error-component/error-component';
import { ListTodosComponent } from './list-todos-component/list-todos-component';
import { MenuComponent } from './menu-component/menu-component';
import { FooterComponent } from './footer-component/footer-component';
import { LogoutComponent } from './logout-component/logout-component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo-component/todo-component';

@NgModule({
  declarations: [
    App,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
