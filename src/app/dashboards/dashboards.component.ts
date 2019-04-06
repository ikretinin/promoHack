import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateDashboardDialogComponent } from './components/create-dashboard-dialog/create-dashboard-dialog.component';
import {Router} from '@angular/router';
import {YoutubeService} from '../services/youtube.service';
import {ChannelDasboardModel} from './models/channel.model';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {

  channels: ChannelDasboardModel[];
  userId = localStorage.getItem('currentUser');

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private service: YoutubeService) {
  }

  ngOnInit() {
    this.getChannels();
  }

  addDashboard() {
    const dialogRef = this.dialog.open(CreateDashboardDialogComponent, {
      width: '420px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.service.createChannel({ ...result, userId: localStorage.getItem('currentUser')}).subscribe(() => this.getChannels());
    });
  }

  toVideo(id: string) {
    this.router.navigate(['/channels', id]);
  }

  getChannels() {
    this.service.getChannels(this.userId).subscribe(m => this.channels = m);
  }
}
