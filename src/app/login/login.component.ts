import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {YoutubeService} from "../services/youtube.service";
import {any} from "codelyzer/util/function";
import {environment} from '../../environments/environment';

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
    private http: HttpClient,
    private service: YoutubeService
  ) {
  }
  

  enter() {
    localStorage.setItem('currentUser', `${JSON.stringify({login: this.login})}`);
    this.router.navigate(['/channels'], {replaceUrl: true});
  }

  signInGoogle() {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=476964635324-peqttc9i3rmisb3p1kr0kpdn0ktdd7c9.apps.googleusercontent.com&redirect_uri=${environment.returnUrl}&response_type=token&scope=https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.force-ssl`;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(qp => {
      if (qp['returnUrl']) {
        const returnUrlParams = this.getQueryParams(qp['returnUrl']);
        this.accessToken = returnUrlParams.access_token;
        this.http.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${this.accessToken}`)
          .subscribe(m => {
            this.setLocalStorage(m['id'], m['name']);
            this.service.updateUser({...m, accessToken: this.accessToken})
              .subscribe(() => {
                this.router.navigate(['/channels'], {replaceUrl: true});
              });
          });
      }
    });
  }

  setLocalStorage(id: string, name: string) {
    localStorage.setItem('currentUser', `${id}`);
    localStorage.setItem('accessToken', `${this.accessToken}`);
    localStorage.setItem('userName', `${name}`);
  }

  getQueryParams(locationSearch: string): any {
    const params = {};
    if (locationSearch) {
      locationSearch = locationSearch.split('#')[1];
      const splited = locationSearch.split('&');
      for (let i = 0; i < splited.length; i++) {
        const propName = splited[i].split('=')[0];
        const propValue = splited[i].split('=')[1];
        params[propName] = propValue;
      }
    }

    return params;
  }

}
