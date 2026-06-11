import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { WelcomeComponent } from './welcome-component/welcome-component';
import { LoginComponent } from './login-component/login-component';

@NgModule({
  declarations: [App, WelcomeComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
