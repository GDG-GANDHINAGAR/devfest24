import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output, QueryList, ViewChildren
} from '@angular/core';
import {AppService} from "../services/app.service";

@Directive({
  selector: '[observeIntersectionOnChildren]',
  standalone: true
})
export class IntersectionDirective implements OnDestroy, OnInit, AfterViewInit {
  app = inject(AppService);
  parent = inject(ElementRef);
  @Input() debounceTime = 800;
  @Input() threshold = 1;
  @Input() test: any;
  @Output() visible = new EventEmitter<IntersectionObserverEntry>();

  ngAfterViewInit(): void {
    // console.log(this.parent)
    // console.log(this.test)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  // private observer: IntersectionObserver | undefined;
  // private subject$ = new Subject<{
  //   entry: IntersectionObserverEntry;
  //   observer: IntersectionObserver;
  // } | null>();
  //
  // constructor(private element: ElementRef) {
  // }
  //
  // ngOnInit() {
  //   if (!this.app.isBrowser) return;
  //   this.createObserver();
  // }
  //
  // ngAfterViewInit() {
  //   if (!this.app.isBrowser) return;
  //   this.startObservingElements();
  // }
  //
  // ngOnDestroy() {
  //   if (this.observer) {
  //     this.observer.disconnect();
  //     this.observer = undefined;
  //   }
  //
  //   this.subject$.complete();
  // }
  //
  // private isVisible(element: HTMLElement) {
  //   return new Promise(resolve => {
  //     const observer = new IntersectionObserver(([entry]) => {
  //       resolve(entry.intersectionRatio === 1);
  //       observer.disconnect();
  //     });
  //
  //     observer.observe(element);
  //   });
  // }
  //
  // private createObserver() {
  //   const options = {
  //     rootMargin: '0px',
  //     threshold: [0, 1],
  //
  //   };
  //
  //   const isIntersecting = (entry: IntersectionObserverEntry) =>
  //     entry.isIntersecting || entry.intersectionRatio > 0;
  //
  //   this.observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       if (isIntersecting(entry)) {
  //         this.subject$.next({entry, observer});
  //       } else {
  //         this.subject$.next({entry, observer});
  //       }
  //     });
  //   }, options);
  // }
  //
  // private startObservingElements() {
  //   if (!this.observer) {
  //     return;
  //   }
  //
  //   this.observer.observe(this.element.nativeElement);
  //
  //   this.subject$
  //     .pipe(delay(this.debounceTime),)
  //     .subscribe(async ({entry, observer}) => {
  //       console.log(entry.target.id, entry.intersectionRatio);
  //       this.visible.emit(entry);
  //     });
  // }
}
