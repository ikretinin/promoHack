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

  createTaskForChannel(channel: CreateDashboardModel): Observable<any> {
    return this.http.post<any>(`${environment.API_ENDPOINT}/createTaskForChannel`, JSON.stringify(channel));
  }

  getChannels(): Observable<ChannelDasboardModel[]> {
    return this.http.get<ChannelDasboardModel[]>(`${environment.API_ENDPOINT}/getChannels`);
  }

  getVideosByChannelId(channelId: string): Observable<VideoDashboardModel[]> {
    return this.http.get<VideoDashboardModel[]>(`${environment.API_ENDPOINT}/getVideosByChannelId?id=${channelId}`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.post<any>(`${environment.API_ENDPOINT}/updateUser`, JSON.stringify(user));
  }
}
