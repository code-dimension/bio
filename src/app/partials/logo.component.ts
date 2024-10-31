import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-logo",
  template: `
    <figure class="flex justify-center">
      <img
        class="rounded-full w-[150px]"
        src="code-dimension-logo.png"
        alt="Code Dimesion Logo"
      />
    </figure>
  `,
})
export class LogoComponent {}
