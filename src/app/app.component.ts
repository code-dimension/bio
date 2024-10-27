import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './components/video.component';
import { CardComponent } from './components/card.component';
import { YoutubeService } from './services/youtube.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VideoComponent, CardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  youtubeService = inject(YoutubeService);

  videos$ = this.youtubeService.getLastestVideos();

  currentYear = signal(new Date().getFullYear());
}
