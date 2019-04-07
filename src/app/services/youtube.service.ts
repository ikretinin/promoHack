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

  getChannelById(channelId: string): Observable<any> {
    return this.http.get<any>(`${environment.API_ENDPOINT}/getChannel?channelId=${channelId}`);
  }

  getChannels(userId: string): Observable<ChannelDasboardModel[]> {
    return this.http.get<ChannelDasboardModel[]>(`${environment.API_ENDPOINT}/getChannels?userId=${userId}`);
  }

  getAllChannelVideos(channelId: string): Observable<VideoDashboardModel[]> {
    return this.http.get<VideoDashboardModel[]>(`${environment.API_ENDPOINT}/getAllChannelVideos?channelId=${channelId}`);
  }

  getVideoById(videoId: string): Observable<any> {
    return this.http.get<any>(`${environment.API_ENDPOINT}/getVideo?videoId=${videoId}`);
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
