import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatDialogModule, MatSliderModule, MatFormFieldControl, MatCheckboxModule, MatSlideToggleModule} from '@angular/material';
import {AuthGuard} from './guards/auth.guard';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { CreateDashboardDialogComponent } from './dashboards/components/create-dashboard-dialog/create-dashboard-dialog.component';
import {VideoInfoComponent} from './lk/video-info.component';
import {ChartsModule} from 'ng2-charts';
import {StatChartComponent} from './stat-chart/stat-chart.component';
import {VideosComponent} from './videos/video.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardsComponent,
    CreateDashboardDialogComponent,
    VideoInfoComponent,
    StatChartComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    ChartsModule
  ],
  providers: [
    AuthGuard
  ],
  entryComponents: [
    CreateDashboardDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
