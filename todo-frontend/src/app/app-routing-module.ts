import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { WelcomeComponent } from './welcome-component/welcome-component';
import { ErrorComponent } from './error-component/error-component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'welcome/:name', component: WelcomeComponent},
  {path: '', component: LoginComponent},
  {path: '**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
