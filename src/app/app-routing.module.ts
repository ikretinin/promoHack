import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {VideoInfoComponent} from './lk/video-info.component';
import {AuthGuard} from './guards/auth.guard';
import { DashboardsComponent } from './dashboards/dashboards.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'lk', pathMatch: 'full'},
  {path: 'dashboards', component: DashboardsComponent, canActivate: [AuthGuard]},
  {path: 'lk', component: VideoInfoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
