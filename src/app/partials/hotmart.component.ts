import { Component } from "@angular/core";
import { CardComponent } from "../components/card.component";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [CardComponent, CommonModule],
  selector: "app-hotmart",
  host: {
    "[class]": '"space-y-8"',
  },
  template: `
    <app-card class="block" [link]="hotmartLink" color="primary">
      <ng-container title> Acesse nossa plataforma de cursos! </ng-container>

      <ng-container description>
        Confira todos os nossos cursos de Angular e dê um upgrade na sua carreira! 
      </ng-container>
    </app-card>
  `,
  styles: [``],
})
export class HotmartComponent {
  hotmartLink = "https://hotmart.com/pt-br/club/code-dimension";
}
