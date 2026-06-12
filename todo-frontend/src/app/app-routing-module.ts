import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { WelcomeComponent } from './welcome-component/welcome-component';
import { ErrorComponent } from './error-component/error-component';
import { ListTodosComponent } from './list-todos-component/list-todos-component';
import { LogoutComponent } from './logout-component/logout-component';
import { RouteGuard } from './service/route-guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuard]},
  {path: '', component: LoginComponent},
  {path: 'todos', component: ListTodosComponent, canActivate:[RouteGuard]},
  {path: 'logout', component: LogoutComponent, canActivate:[RouteGuard]},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
