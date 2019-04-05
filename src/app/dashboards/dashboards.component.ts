import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateDashboardDialogComponent } from './components/create-dashboard-dialog/create-dashboard-dialog.component';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {

  dashboards = [1,2,3,4,5];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {

  }

  addDashboard() {
    console.log('Add');
    const dialogRef = this.dialog.open(CreateDashboardDialogComponent, {
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      var data = result;
    });
  }
}
