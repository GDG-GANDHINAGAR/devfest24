import {Component, HostListener, Inject, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AppService} from "../../../services/app.service";
import {AsyncPipe, isPlatformBrowser, JsonPipe, NgClass, NgOptimizedImage, NgStyle} from "@angular/common";
import {HeaderElement} from "../../../types/header.type";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    NgStyle,
    NgOptimizedImage,
    NgClass,
    JsonPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {
  private app = inject(AppService)
  isLandscape$ = this.app.isLandscape$;
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;
  innerWidth: number;
  innerHeight: number;

  @HostListener('window:resize', ['$event'])
  resize() {
    this.setVars()
  }


  elementBaseSize = {
    desktop: {
      width: 1920,
      ratio: 16 / 9
    },
    mobile: {
      width: 1920,
      ratio: 16 / 9
    },
    tab: {
      height: 1080,
      width: 1920,
      ratio: 16 / 9
    },
  }
  images = [
    {
      src: 'image/star.svg',
      width: 300,
      height: 300,
      top: 1000,
      left: 1000
    },
    {
      src: 'image/search.svg',
      width: 410,
      height: 114,
      top: 1000,
      left: 1000
    },
    {
      src: 'image/heart.svg',
      width: 350,
      height: 305,
      top: 100,
      left: 0
    },
    {
      src: 'image/cloud.svg',
      width: 270,
      height: 195,
      top: 1000,
      left: 1000
    },
    {
      src: 'image/rainbow.svg',
      width: 135,
      height: 135,
      top: 0,
      left: 0
    },
    {
      src: 'image/cd.svg',
      width: 180,
      height: 180,
      top: 1000,
      left: 1000
    },
  ]

  getBaseSize(img: HeaderElement) {
    let data = {
      width: `${(img.width)}px`,
      height: `${(img.height)}px`,
    }

    return data;
  }

  ngOnInit(): void {
    this.setVars()
  }

  setVars() {
    if (this.app.isBrowser) {
      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight;
    }
  }
}

// (10*300)/1920
