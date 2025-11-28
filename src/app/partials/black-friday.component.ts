import { Component } from "@angular/core";
import { CardComponent } from "../components/card.component";
import { CommonModule } from "@angular/common";

interface Offer {
  title: string;
  description: string;
  color?: "primary" | "neutral" | "warning" | "info";
  link: string;
  badges: {
    label: string;
    class: "badge-warning" | "badge-info" | "badge-primary";
  }[];
}

@Component({
  imports: [CardComponent, CommonModule],
  selector: "app-black-friday",
  host: {
    "[class]": '"space-y-8"',
  },
  template: `
    @for (item of offers; track item.title) {
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
export class BlackFridayComponent {
  offers: Offer[] = [
    {
      color: "warning",
      title: "Assinatura Anual Code Universe",
      description:
        "Receba acesso total a todos os cursos atuais e futuros da Code Dimension por um ano inteiro!",
      link: `https://www.codedimension.com.br/ofertas/black-friday/?utm_source=bio&utm_medium=organic&utm_campaign=${this.getCurrentDate()}`,
      badges: [{ label: "Black Friday - 80% OFF", class: "badge-warning" }],
    },
  ];

  private getCurrentDate() {
    return new Date().toISOString().split("T")[0];
  }
}
