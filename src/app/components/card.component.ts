import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, computed, input, OnInit } from '@angular/core';

const colorClasses = new Map([
  ['primary', 'bg-primary text-primary-content'],
  ['neutral', 'bg-neutral text-neutral-content'],
]);

const iconColors = new Map([
  ['primary', 'icons/box-arrow-up-right-dark.svg'],
  ['neutral', 'icons/box-arrow-up-right.svg'],
]);

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-card',
  template: `
    <a [href]="link()">
      <div class="card w-full" [ngClass]="colorClasses()">
        <div class="card-body">
          <div class="flex">
            <div class="space-y-2 max-w-[90%]">
              <h2 class="card-title">
                <ng-content select="[title]"></ng-content>
              </h2>
              <p>
                <ng-content select="[description]"></ng-content>
              </p>
            </div>
            <img class="w-6 ml-auto" [src]="iconColor()" alt="External Link" />
          </div>
        </div>
      </div>
    </a>
  `,
})
export class CardComponent {
  link = input.required<string>();

  color = input<'primary' | 'neutral' | 'secondary'>('neutral');

  colorClasses = computed(() => {
    return colorClasses.get(this.color());
  });

  iconColor = computed(() => {
    return iconColors.get(this.color());
  });
}
