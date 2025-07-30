import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesComponent } from "./partials/courses.component";
import { SocialMediaComponent } from "./partials/social-media.component";
import { LogoComponent } from "./partials/logo.component";
import { ContentsComponent } from "./partials/contents.component";
import { FooterComponent } from "./partials/footer.component";
import { YtVideosComponent } from "./partials/yt-videos.component";
import { HotmartComponent } from "./partials/hotmart.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    CoursesComponent,
    SocialMediaComponent,
    LogoComponent,
    ContentsComponent,
    FooterComponent,
    YtVideosComponent,
    HotmartComponent
],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
