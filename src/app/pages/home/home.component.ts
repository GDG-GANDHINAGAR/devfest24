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
import {AboutDevfestComponent} from "../../comonents/about-devfest/about-devfest.component";
import {IntersectionDirective} from "../../directives/intersection.directive";
import {ActivatedRoute, Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutDevfestComponent,
    IntersectionDirective
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
  sectionVisibilityEffect = effect(() => {
    const keys = Object.keys(this.sectionsVisible())
    const values = Object.values(this.sectionsVisible())
    const lastActivatedSection = keys[values.lastIndexOf(true)]
    if (!lastActivatedSection) return;
    this.router.navigate([
      ''
    ], {
      fragment: lastActivatedSection,
      replaceUrl: true,
      relativeTo: this.route,
    })
  });

  constructor() {

  }

  ngAfterViewInit() {
    if (!this.app.isBrowser) return;
    this.route.fragment.subscribe(fragment => {
      // const selectedSection = this.sections.filter(section => section.nativeElement.id === fragment)[0]
      // if (!selectedSection) return;
      // const top = selectedSection.nativeElement.offsetTop;
      // this.app.homeScrollElement.getElementRef().nativeElement.scrollTo({top, behavior: 'smooth'})
    })
  }

  onIntersection(e: IntersectionObserverEntry, objectId: string) {
    const section = this.sectionsVisible()
    if (e.isIntersecting && e.intersectionRatio >= 0.5) {
      section[objectId] = true
    } else if (!e.isIntersecting) {
      section[objectId] = false
    }
    this.sectionsVisible.set({...section})
  }
}
