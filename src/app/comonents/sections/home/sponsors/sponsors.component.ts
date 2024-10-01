import {Component, inject} from '@angular/core';
import {AsyncPipe, NgClass, NgOptimizedImage} from "@angular/common";
import {AppService} from "../../../../services/app.service";
import {SPONSORS} from "../../../../constants/data";

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    NgOptimizedImage
  ],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.sass'
})
export class SponsorsComponent {
  app = inject(AppService);
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;
  protected readonly SPONSORS = SPONSORS;
}
