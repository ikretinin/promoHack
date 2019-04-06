import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {VideoInfoComponent} from './video-info/video-info.component';
import {AuthGuard} from './guards/auth.guard';
import { DashboardsComponent } from './dashboards/dashboards.component';
import {VideosComponent} from './videos/video.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'channels', pathMatch: 'full'},
  {path: 'channels', component: DashboardsComponent, canActivate: [AuthGuard]},
  {path: 'video/:id', component: VideoInfoComponent, canActivate: [AuthGuard]},
  {path: 'channels/:id', component: VideosComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
