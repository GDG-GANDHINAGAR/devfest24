import {Component, inject, Input} from '@angular/core';
import {AsyncPipe, NgClass, NgOptimizedImage} from "@angular/common";
import {AppService} from "../../services/app.service";
import {Testimonial} from "../../types/testimonials.type";

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [
    NgOptimizedImage,
    AsyncPipe,
    NgClass
  ],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.sass'
})
export class TestimonialComponent {
  private app = inject(AppService);
  public isPortable$ = this.app.isPortable$;
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;
  @Input({required: true}) testimonial: Testimonial;
}
