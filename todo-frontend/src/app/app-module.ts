import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { WelcomeComponent } from './welcome-component/welcome-component';
import { LoginComponent } from './login-component/login-component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error-component/error-component';
import { ListTodosComponent } from './list-todos-component/list-todos-component';

@NgModule({
  declarations: [App, WelcomeComponent, LoginComponent, ErrorComponent, ListTodosComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
