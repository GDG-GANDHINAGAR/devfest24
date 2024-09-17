import {AfterViewInit, Directive, ElementRef, HostListener, inject, Input} from '@angular/core';
import {AppService} from "../services/app.service";

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements AfterViewInit {
  @Input('ratio') parallaxRatio: number = 1
  @Input('topPos') topPos: number = 0.5
  bBox: any = 0
  app = inject(AppService);

  constructor(private eleRef: ElementRef) {
    if (this.app.isBrowser) {
      this.bBox = this.eleRef.nativeElement.getBoundingClientRect();
      this.eleRef.nativeElement.style.top = (this.bBox.top + (window.innerHeight * this.topPos)) + 'px'
    }
  }

  ngAfterViewInit() {
    this.app.homeScrollElement.elementScrolled().subscribe((event) => {
      const scrollTop = ((event.target as any).scrollTop * this.parallaxRatio)
      console.log(this.bBox.top + (this.bBox.height / 2) - scrollTop)
      console.log()
      this.eleRef.nativeElement.style.top = this.bBox.top - scrollTop + 'px'
      // console.log((this.bBox.top - scrollTop) + (this.eleRef.nativeElement.getBoundingClientRect().height / 2))
    })
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
    if (this.app.isBrowser) {
    }
  }

}
