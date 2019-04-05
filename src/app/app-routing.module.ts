import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LkComponent} from './lk/lk.component';
import {AuthGuard} from './guards/auth.guard';
import { DashboardsComponent } from './dashboards/dashboards.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'lk', pathMatch: 'full'},
  {path: 'lk', component: LkComponent, canActivate: [AuthGuard]},
  {path: 'dashboards', component: DashboardsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
