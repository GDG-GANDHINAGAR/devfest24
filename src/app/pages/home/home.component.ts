import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  QueryList,
  signal,
  viewChildren,
  ViewChildren,
} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {LINKS} from "../../constants/links";
import {IntersectionDirective} from "../../directives/intersection.directive";
import {ActivatedRoute, Router} from "@angular/router";
import {NgOptimizedImage, ViewportScroller} from "@angular/common";
import {AppService} from "../../services/app.service";
import {ParallaxDirective} from "../../directives/parallax.directive";
import {ParallaxScrollDirective} from "../../directives/ngx-parallax-scroll.directive";
import {IParallaxScrollConfig} from "../../directives/ngx-parallax.interfaces";
import {AboutDevfestComponent} from "../../comonents/sections/home/about-devfest/about-devfest.component";
import {Analytics, logEvent} from "@angular/fire/analytics";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutDevfestComponent,
    IntersectionDirective,
    NgOptimizedImage,
    ParallaxDirective,
    ParallaxScrollDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements AfterViewInit {
  private router = inject(Router)
  private app = inject(AppService)
  private route = inject(ActivatedRoute)
  private scroller = inject(ViewportScroller)
  sectionsVisible = signal({
    header: false,
    about: false,
    schedule: false
  })
  sections = viewChildren<ElementRef>('section');
  protected readonly LINKS = LINKS;
  private analytics = inject(Analytics);
  config: IParallaxScrollConfig = {
    parallaxSpeed: 0.2,
    parallaxSmoothness: 1,
    parallaxDirection: 'vertical',
    parallaxTimingFunction: 'ease',
    parallaxThrottleTime: 10
  };

  constructor() {

  }

  ngAfterViewInit() {
    logEvent(this.analytics, 'page_view', {page_path: this.router.url});
  }

}
