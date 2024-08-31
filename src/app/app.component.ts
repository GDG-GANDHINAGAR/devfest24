import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {RootPageComponent} from "./pages/root-page/root-page.component";
import {isPlatformBrowser, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, RootPageComponent, RootPageComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  innerWidth: number;
  innerHeight: number;
  isBrowser: boolean;

  @HostListener('window:resize', ['$event'])
  resize() {
    this.setVars()
  }

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.setVars()
  }

  setVars() {
    if (this.isBrowser) {
      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${this.innerHeight}px`);
      document.documentElement.style.setProperty('--vw', `${this.innerWidth - 17}px`);
    }
  }
}
