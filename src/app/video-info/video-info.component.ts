import {Component, OnInit} from '@angular/core';
import {YoutubeService} from '../services/youtube.service';
import {VideoDashboardModel} from '../videos/video.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.scss']
})
export class VideoInfoComponent implements OnInit {
  videoInfo: VideoDashboardModel[];
  constructor(
    private service: YoutubeService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.service.getVideoById(this.route.snapshot.params['id']).subscribe(x => {
      this.videoInfo = x;
      console.log(x);
    });
  }

  getVideoLink() {
    return `https://www.youtube.com/watch?v=${this.videoInfo[0].videoId}`;
  }
}
