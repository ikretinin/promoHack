import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login = '';
  password = '';

  constructor(
    private router: Router
  ) {}

  enter() {
    localStorage.setItem('currentUser', `${JSON.stringify({login: this.login})}`);
    this.router.navigate(['/lk'], {replaceUrl: true});
  }

  isLogined() {
    return localStorage.getItem('currentUser');
  }
}
