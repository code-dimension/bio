import { Component, inject, signal } from "@angular/core";
import { CardComponent } from "../components/card.component";
import { CommonModule } from "@angular/common";
import { VideoComponent } from "../components/video.component";
import { YoutubeService } from "../services/youtube.service";

interface Content {
  title: string;
  description: string;
  link: string;
}

@Component({
  standalone: true,
  imports: [VideoComponent, CommonModule],
  selector: "app-yt-videos",
  template: `
    <div class="w-full space-y-8">
      @for (video of videos$ | async; track video) {
        <app-video class="block" [videoUrl]="video"></app-video>
      }
    </div>
  `,
  styles: [``],
})
export class YtVideosComponent {
  youtubeService = inject(YoutubeService);

  videos$ = this.youtubeService.getLastestVideos();
}
