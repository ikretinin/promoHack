import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AuthGuard} from './guards/auth.guard';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {VideoInfoComponent} from './lk/video-info.component';
import {ChartsModule} from 'ng2-charts';
import {StatChartComponent} from './stat-chart/stat-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideoInfoComponent,
    StatChartComponent
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
    ChartsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
