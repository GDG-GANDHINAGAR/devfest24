import {Component, inject} from '@angular/core';
import {AsyncPipe, NgClass} from "@angular/common";
import {AppService} from "../../../../services/app.service";

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe
  ],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.sass'
})
export class SponsorsComponent {
  app = inject(AppService);
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;
}
