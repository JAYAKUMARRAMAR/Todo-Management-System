import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { WelcomeComponent } from './welcome-component/welcome-component';
import { ErrorComponent } from './error-component/error-component';
import { ListTodosComponent } from './list-todos-component/list-todos-component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'welcome/:name', component: WelcomeComponent},
  {path: '', component: LoginComponent},
  {path: 'todos', component: ListTodosComponent},
  {path: '**', component: ErrorComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
