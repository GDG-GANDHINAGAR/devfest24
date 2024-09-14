import {Component, inject, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";
import {YouTubePlayer} from "@angular/youtube-player";
import {AsyncPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-last-year',
  standalone: true,
  imports: [
    YouTubePlayer,
    AsyncPipe,
    NgClass
  ],
  templateUrl: './last-year.component.html',
  styleUrl: './last-year.component.sass'
})
export class LastYearComponent implements OnInit {
  app = inject(AppService)
  isLandscape$ = this.app.isLandscape$;
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;
  private apiLoaded: boolean;
  videoId = 'bXbNeMS1HdM';

  constructor() {
  }

  ngOnInit(): void {
    if (!this.apiLoaded && this.app.isBrowser) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  log(e) {
    console.log(e)
  }
}
