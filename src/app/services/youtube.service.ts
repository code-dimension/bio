import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PlaylistItems } from '../interfaces/playlist-items.interface';
import { YOUTUBE_API_KEY } from '../constants/youtube-api-key';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  httpClient = inject(HttpClient);

  getLastestVideos() {
    return this.httpClient.get<string[]>('/api/list-latest-videos');
  }
}
