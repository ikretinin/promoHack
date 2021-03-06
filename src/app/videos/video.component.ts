import {Component, OnInit} from '@angular/core';
import {VideoDashboardModel} from './video.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {map, subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-videos',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideosComponent implements OnInit {

  channelTitle = 'Title 1';
  videos: VideoDashboardModel[] = [
    {
      id: '123',
      channelTitle: 'Title 1',
      commentCount: 145,
      dislikeCount: 168,
      likeCount: 190,
      viewCount: 19340,
      publishedAt: new Date(),
      title: 'Name 1',
      thumbnail: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg'
    },
    {
      id: '234',
      channelTitle: 'Title 2',
      commentCount: 156,
      dislikeCount: 112,
      likeCount: 145,
      viewCount: 193467,
      publishedAt: new Date(),
      title: 'Name 2',
      thumbnail: 'https://bipbap.ru/wp-content/uploads/2017/10/0_a9e8c_fefaa1d2_XL-640x400.jpg'
    },
    {
      id: '345',
      channelTitle: 'Title 3',
      commentCount: 1346,
      dislikeCount: 11567,
      likeCount: 1125,
      viewCount: 19347,
      publishedAt: new Date(),
      title: 'Name 3',
      thumbnail: 'https://bipbap.ru/wp-content/uploads/2017/10/0_a9e8f_beecb6d9_XL-640x400.jpg'
    },
    {
      id: '456',
      channelTitle: 'Title 4',
      commentCount: 145,
      dislikeCount: 168,
      likeCount: 190,
      viewCount: 19340,
      publishedAt: new Date(),
      title: 'Name 1',
      thumbnail: 'https://bipbap.ru/wp-content/uploads/2017/10/10-640x400.jpg'
    },
    {
      id: '567',
      channelTitle: 'Title 5',
      commentCount: 156,
      dislikeCount: 112,
      likeCount: 145,
      viewCount: 193467,
      publishedAt: new Date(),
      title: 'Name 2',
      thumbnail: 'https://bipbap.ru/wp-content/uploads/2017/10/121746-640x400.jpg'
    },
    {
      id: '678',
      channelTitle: 'Title 6',
      commentCount: 1346,
      dislikeCount: 11567,
      likeCount: 1125,
      viewCount: 19347,
      publishedAt: new Date(),
      title: 'Name 3',
      thumbnail: 'https://bipbap.ru/wp-content/uploads/2017/10/1443282805_37698__maldives-dusk_p-640x400.jpg'
    }
  ];

  isChart$ = new Observable();
  subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isChart$ = this.route.queryParamMap.pipe(map(param => !!param.get('videoId')));
  }

  openChartByVideo(id: string) {
    this.router.navigate([this.router.url], {
      queryParams: {
        videoId: id
      }
    });
  }

}
