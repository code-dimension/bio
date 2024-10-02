import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PlaylistItems } from '../interfaces/playlist-items.interface';
import { YOUTUBE_API_KEY } from '../constants/youtube-api-key';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  httpClient = inject(HttpClient);

  getPlaylistItems(playlistId: string) {
    return this.httpClient.get<PlaylistItems>(
      'https://www.googleapis.com/youtube/v3/playlistItems',
      {
        params: {
          playlistId,
          key: YOUTUBE_API_KEY,
          part: 'contentDetails',
        },
      }
    );
  }
}
