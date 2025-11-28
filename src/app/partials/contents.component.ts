import { Component } from "@angular/core";
import { CardComponent } from "../components/card.component";

interface Content {
  title: string;
  description: string;
  link: string;
}

@Component({
  imports: [CardComponent],
  selector: "app-contents",
  host: {
    "[class]": '"space-y-8"',
  },
  template: `
    @for (item of contents; track item.title) {
      <app-card class="block" [link]="item.link">
        <ng-container title>
          {{ item.title }}
        </ng-container>

        <ng-container description>
          {{ item.description }}
        </ng-container>
      </app-card>
    }
  `,
  styles: [``],
})
export class ContentsComponent {
  contents: Content[] = [
    {
      title: "Nosso Website",
      description:
        "O lugar perfeito para você ficar por dentro de novos cursos e conteúdos!",
      link: "http://codedimension.com.br/",
    },

    {
      title: "Nosso Blog",
      description:
        "Muito contéudo sobre Frontend e Angular. É o melhor lugar para você se atualizar!",
      link: "http://blog.codedimension.com.br/",
    },
  ];
}
