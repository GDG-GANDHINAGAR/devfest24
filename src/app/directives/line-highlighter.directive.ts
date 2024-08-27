import {AfterViewInit, Directive, ElementRef, inject, Input, Renderer2} from '@angular/core';
import {AppService} from "../services/app.service";

@Directive({
  selector: '[retro-highlight]',
  standalone: true
})
export class LineHighlighterDirective implements AfterViewInit {
  private app = inject(AppService);
  @Input() highlighterHeight = 4
  @Input() mode: 'horizontal' | 'vertical' = 'horizontal';
  @Input() activeClass = 'active';
  @Input({required: true}) highlighter: HTMLDivElement & HTMLElement;
  children: HTMLElement[] = [];
  private activeElement: HTMLElement;
  elementBbox: DOMRect;
  private linkBbox: DOMRect;

  get getUL() {
    return this.elementRef.nativeElement.children[0] as HTMLElement;
  }

  constructor(private elementRef: ElementRef, private r2: Renderer2,) {

  }

  ngAfterViewInit() {
    if (this.elementRef.nativeElement && this.app.isBrowser) {
      this.r2.setStyle(this.elementRef.nativeElement, 'position', 'relative');
      if (this.highlighter) {
        this.r2.setStyle(this.highlighter, 'position', 'absolute');
        this.r2.setStyle(this.highlighter, 'height', `${this.highlighterHeight}px`);
        this.r2.setStyle(this.highlighter, 'transition', `all ease 0.2s`);
        this.r2.setStyle(this.highlighter, 'z-index', '1');
      }
      const liElements = Array.from(this.getUL.children).filter(child => {
        return child.tagName === 'LI' && !child.classList.contains('highlighter');
      });
      this.children = liElements as HTMLElement[];
      this.elementBbox = this.getUL.getBoundingClientRect();
      this.setUpObservers();
    }
  }

  setUpObservers() {
    const observers = new MutationObserver((mutations: MutationRecord[]) => {
      mutations.forEach((mutation: MutationRecord) => {
        console.log(mutation);
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target as HTMLElement;
          const isRemoval = mutation.oldValue?.includes(this.activeClass) && !target.classList.contains(this.activeClass);
          console.log('isRemoval', isRemoval);
          if (isRemoval) return;
          this.activeElement = target;
          this.linkBbox = target.getBoundingClientRect();
          this.drawLine();
        }
      });
    });
    observers.observe(this.getUL, {
      childList: true,
      subtree: true,
      attributeOldValue: true,
      attributeFilter: ['class'],
    })
  }

  private drawLine() {
    if (this.elementBbox && this.linkBbox) {
      const {bottom, left, width, height, top} = this.linkBbox;
      const {top: parentTop, left: parentLeft} = this.elementBbox;
      if (this.mode === 'horizontal') {
        this.r2.setStyle(this.highlighter, 'bottom', `0px`);
        this.r2.setStyle(this.highlighter, 'left', `${left - parentLeft}px`);
        this.r2.setStyle(this.highlighter, 'width', `${width}px`);
      } else {
        this.r2.setStyle(this.highlighter, 'top', `${top - parentTop}px`);
        this.r2.setStyle(this.highlighter, 'left', `0px`);
        this.r2.setStyle(this.highlighter, 'height', `${height}px`);
        this.r2.setStyle(this.highlighter, 'width', `8px`);
      }
      this.r2.setStyle(this.highlighter, 'background', `#000`);
    }
  }
}
