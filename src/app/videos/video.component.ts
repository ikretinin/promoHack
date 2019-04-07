import {Component, OnInit} from '@angular/core';
import {VideoDashboardModel} from './video.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {map, subscribeOn} from 'rxjs/operators';
import {YoutubeService} from '../services/youtube.service';

@Component({
  selector: 'app-videos',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideosComponent implements OnInit {

  videos: VideoDashboardModel[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: YoutubeService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.service.getAllChannelVideos(this.route.snapshot.params['id']).subscribe(x => {
      this.videos = x;
      console.log(this.videos);
    });
    this.service.getChannelById(this.route.snapshot.params['id']).subscribe(x => console.log(x));
    this.service.getVideoById('Dn6cxkdEL2A').subscribe(x => console.log(x));
  }

  openChartByVideo(id: string) {
    this.router.navigate(['/video', id]);
  }

}
