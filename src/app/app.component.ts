import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ) {}
  isLogined() {
    return localStorage.getItem('currentUser');
  }

  exit() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
