import {Component, OnInit} from '@angular/core';
import { CreateDashboardModel } from '../../models/create-dashboard.model';

@Component({
  selector: 'app-create-dashboard-dialog',
  templateUrl: './create-dashboard-dialog.component.html',
  styleUrls: ['./create-dashboard-dialog.component.scss']
})
export class CreateDashboardDialogComponent implements OnInit {

  dashboard: CreateDashboardModel;

  constructor() {
  }

  ngOnInit() {
    this.dashboard = {
      link: null,
      processingTime: 1,
      updatePeriod: 1,
      isLikes: null,
      isViews: null,
      isComments: null,
      isCommentsMood: null,
      userId: null
    };
  }
}

