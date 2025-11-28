import { Component } from "@angular/core";
import { CardComponent } from "../components/card.component";
import { CommonModule } from "@angular/common";

interface Course {
  title: string;
  description: string;
  color?: "primary" | "neutral" | "warning" | "info";
  link: string;
  badges: {
    label: string;
    class: "badge-warning" | "badge-info" | "badge-primary" | "badge-accent";
  }[];
}

@Component({
  imports: [CardComponent, CommonModule],
  selector: "app-courses",
  host: {
    "[class]": '"space-y-8"',
  },
  template: `
    @for (item of courses; track item.title) {
      <app-card class="block" [link]="item.link" [color]="item.color">
        @if (item.badges) {
          <ng-container badges>
            @for (badge of item.badges; track $index) {
              <div class="badge" [ngClass]="badge.class">
                {{ badge.label }}
              </div>
            }
          </ng-container>
        }

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
export class CoursesComponent {
  courses: Course[] = [
    {
      color: "primary",
      title: "Curso Angular Moderno",
      description:
        "Aprenda todas as novidades do Angular 20 e se torne um desenvolvedor mais produtivo e eficiente no seu dia a dia!",
      link: "https://www.codedimension.com.br/cursos/angular-moderno/?utm_source=bio&utm_medium=organic&utm_campaign=bio_website",
      badges: [{ label: "Lançamento - 20% OFF", class: "badge-primary" }],
    },

    {
      color: "primary",
      title: "Curso Testes Automatizados com Angular!",
      description:
        "Aprenda a criar testes eficientes de verdade e torne-se um profissional altamente requisitado no mercado!",
      link: "https://www.codedimension.com.br/cursos/testes-automatizados/?utm_source=bio&utm_medium=organic&utm_campaign=bio_website",
      badges: [{ label: "Super Curso - 13 %OFF", class: "badge-primary" }],
    },

    {
      title: "Curso de Angular 17",
      description:
        "Aprenda todos os conceitos sobre Angular 17 de forma 100% gratuita!",
      link: "https://www.youtube.com/playlist?list=PLXEUJjGpEX7zwdFSAzIPiSf9p0tOeI1Yu",
      badges: [{ label: "Gratuito", class: "badge-primary" }],
    },
  ];
}
