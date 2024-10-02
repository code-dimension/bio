import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './components/video.component';
import { YoutubeFacadeService } from './services/youtube-facade.service';
import { CardComponent } from './components/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VideoComponent, CardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  youtubeFacadeService = inject(YoutubeFacadeService);

  videos$ = this.youtubeFacadeService.getLastVideoUrlList();

  currentYear = signal(new Date().getFullYear());
}
