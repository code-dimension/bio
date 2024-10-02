import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-video',
  template: `
    <iframe
      [src]="safeVideoUrl()"
      class="w-full aspect-video"
      frameborder="0"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen="iframe"
    ></iframe>
  `,
})
export class VideoComponent {
  domSanitizer = inject(DomSanitizer);

  videoUrl = input.required<string>();

  safeVideoUrl = computed(() => {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoUrl());
  });
}
