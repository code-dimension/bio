import { Component, signal } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-footer",
  template: `
    <footer class="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {{ currentYear() }} - Esse website foi feito com muito 💜
          por
          <a class="link-primary" href="https://www.codedimension.com.br/"
            >Code Dimension</a
          >
        </p>
      </aside>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = signal(new Date().getFullYear());
}
