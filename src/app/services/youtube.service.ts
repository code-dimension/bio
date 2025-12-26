import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class YoutubeService {
  httpClient = inject(HttpClient);

  getLastestVideos() {
    return this.httpClient.get<string[]>("http://localhost:3000/api/list-latest-videos");
  }
}
