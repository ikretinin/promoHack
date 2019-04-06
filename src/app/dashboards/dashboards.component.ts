import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateDashboardDialogComponent } from './components/create-dashboard-dialog/create-dashboard-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {

  dashboards = [1,2,3,4,5];

  constructor(
    public dialog: MatDialog,
    private router: Router) {
  }

  ngOnInit() {

  }

  addDashboard() {
    console.log('Add');
    const dialogRef = this.dialog.open(CreateDashboardDialogComponent, {
      width: '420px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      var data = result;
    });
  }

  toVideo(id: string) {
    this.router.navigate(['/channels', id]);
  }
}
