import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = '';
  password = '';
  private accessToken: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
  }

  enter() {
    localStorage.setItem('currentUser', `${JSON.stringify({login: this.login})}`);
    this.router.navigate(['/channels'], {replaceUrl: true});
  }

  isLogined() {
    return localStorage.getItem('currentUser');
  }

  signInGoogle() {
    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=476964635324-peqttc9i3rmisb3p1kr0kpdn0ktdd7c9.apps.googleusercontent.com&redirect_uri=http://localhost:4200/channels&response_type=token&scope=https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/userinfo.profile';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(qp => {
      if (qp['returnUrl']) {
        let returnUrlParams = this.getQueryParams(qp['returnUrl'])
        this.accessToken = returnUrlParams.access_token;
        this.http.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${this.accessToken}`)
          .subscribe(m => {
            console.log(m);
            localStorage.setItem('currentUser', `${JSON.stringify({login: m.id})}`);
            localStorage.setItem('accessToken', `${JSON.stringify({login: this.accessToken})}`);
            localStorage.setItem('userName', `${JSON.stringify({login: m.name})}`);
            this.router.navigate(['/channels'], {replaceUrl: true});
          });
      }
    });
  }

  getQueryParams(locationSearch: string): any {
    let params = {};
    if (locationSearch) {
      locationSearch = locationSearch.split('#')[1];
      let splited = locationSearch.split('&');
      for (let i = 0; i < splited.length; i++) {
        let propName = splited[i].split('=')[0];
        let propValue = splited[i].split('=')[1];
        params[propName] = propValue;
      }
    }

    return params;
  }

}
