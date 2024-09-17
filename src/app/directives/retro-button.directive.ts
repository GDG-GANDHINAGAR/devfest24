import {Directive, ElementRef, HostBinding, Input} from '@angular/core';
import {AppColors} from "../constants/enums";

@Directive({
  selector: '[retro-button]',
  standalone: true
})
export class RetroButtonDirective {
  @Input() icon: boolean = false;
  @Input() color: AppColors;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @HostBinding('class') get classes(): string {
    return `retro-button ${(this.color ? this.color : AppColors.YELLOW).toLowerCase()} ${this.icon ? 'icon' : ''} ${this.size}`;
  }

  constructor(private elementRef: ElementRef) {
  }

}
