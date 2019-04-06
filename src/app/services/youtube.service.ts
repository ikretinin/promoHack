import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateDashboardModel} from '../dashboards/models/create-dashboard.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ChannelDasboardModel} from '../dashboards/models/channel.model';
import {VideoDashboardModel} from '../videos/video.model';

@Injectable()
export class YoutubeService {
  constructor(
    private http: HttpClient
  ) {}

  createChannel(channel: CreateDashboardModel): Observable<any> {
    return this.http.post<any>(`${environment.API_ENDPOINT}/createChannel`, channel);
  }

  getChannels(): Observable<ChannelDasboardModel[]> {
    return this.http.get<ChannelDasboardModel[]>(`${environment.API_ENDPOINT}/getChannels`);
  }

  getVideosByChannelId(channelId: string): Observable<VideoDashboardModel[]> {
    return this.http.get<VideoDashboardModel[]>(`${environment.API_ENDPOINT}/getVideosByChannelId?id=${channelId}`);
  }

  updateUser(user: any): Observable<any> {
    const currentUser = {
      id: user.id,
      token: user.accessToken,
      name: user.name,
      link: user.link,
      picture: user.picture
    };
    return this.http.post<any>(`${environment.API_ENDPOINT}/updateUser`, currentUser);
  }
}
