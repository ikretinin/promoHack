export interface VideoDashboardModel {
  videoId: string;
  publishedAt: Date;
  title: string;
  thumbnail: string;
  channelTitle: string;
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  commentCount: number;
}
