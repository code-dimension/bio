import { Component, signal } from "@angular/core";

import { CoursesComponent } from "./partials/courses.component";
import { SocialMediaComponent } from "./partials/social-media.component";
import { LogoComponent } from "./partials/logo.component";
import { ContentsComponent } from "./partials/contents.component";
import { FooterComponent } from "./partials/footer.component";
import { YtVideosComponent } from "./partials/yt-videos.component";
import { HotmartComponent } from "./partials/hotmart.component";
import { BlackFridayComponent } from "./partials/black-friday.component";
import { DateTime } from "luxon";

@Component({
  selector: "app-root",
  imports: [
    CoursesComponent,
    SocialMediaComponent,
    LogoComponent,
    ContentsComponent,
    FooterComponent,
    YtVideosComponent,
    HotmartComponent,
    BlackFridayComponent,
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  showBlackFridayOffer = signal(this.isBlackFridayOfferActive());

  private isBlackFridayOfferActive() {
    const nowDT = DateTime.fromISO(
      DateTime.now().toISO({ precision: "day", includeOffset: false }),
    );
    const limitDT = DateTime.fromISO("2025-12-02");

    return nowDT <= limitDT;
  }
}
