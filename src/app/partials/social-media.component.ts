import { Component } from "@angular/core";
import { CardComponent } from "../components/card.component";
import { CommonModule } from "@angular/common";

interface SocialMedia {
  href: string;
  src: string;
  alt: string;
}

@Component({
    imports: [CommonModule],
    selector: "app-social-media",
    host: {
        "[class]": '"space-y-8"',
    },
    template: `
    <section class="flex justify-center space-x-4">
      @for (item of socialMediaList; track $index) {
        <a [href]="item.href">
          <img class="w-6" [src]="item.src" [alt]="item.alt" />
        </a>
      }
    </section>
  `,
    styles: [``]
})
export class SocialMediaComponent {
  socialMediaList: SocialMedia[] = [
    {
      href: "https://www.youtube.com/@code.dimension",
      src: "icons/youtube.svg",
      alt: "Youtube",
    },
    {
      href: "https://chat.whatsapp.com/Eo6YWjWyAgA5gdBUkXoi13",
      src: "icons/whatsapp.svg",
      alt: "Whatsapp",
    },
    {
      href: "https://discord.gg/VFNmgxEHXF",
      src: "icons/discord.svg",
      alt: "Discord",
    },
    {
      href: "https://www.tiktok.com/@codedimension?_t=8olNHxRO7u9&_r=1",
      src: "icons/tiktok.svg",
      alt: "Tiktok",
    },
    {
      href: "https://instagram.com/codedimension_",
      src: "icons/instagram.svg",
      alt: "Instagram",
    },
    {
      href: "https://www.threads.net/@codedimension_",
      src: "icons/threads.svg",
      alt: "Threads",
    },
    {
      href: "https://www.linkedin.com/company/code-dimension/",
      src: "icons/linkedin.svg",
      alt: "Linkedin",
    },
  ];
}
