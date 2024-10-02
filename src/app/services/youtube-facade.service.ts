import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { YoutubeService } from './youtube.service';
import { YOUTUBE_PLAYLIST_ID } from '../constants/youtube-playlist';
import { PlaylistItems } from '../interfaces/playlist-items.interface';

@Injectable({
  providedIn: 'root'
})
export class YoutubeFacadeService {

  youtubeService = inject(YoutubeService)

  getLastVideoUrlList() {
    return this.youtubeService.getPlaylistItems(YOUTUBE_PLAYLIST_ID)
      .pipe(
        map((data: PlaylistItems) => {
          return data.items.map((item) => item.contentDetails.videoId);
        }),
        map((data: string[]) => data.map((item) => `https://www.youtube.com/embed/${item}`)),
      );
  }

}
