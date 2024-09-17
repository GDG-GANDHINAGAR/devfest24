import {Component, inject} from '@angular/core';
import {AsyncPipe, NgClass, NgOptimizedImage} from "@angular/common";
import {AppService} from "../../../../services/app.service";
import {RetroButtonDirective} from "../../../../directives/retro-button.directive";

@Component({
  selector: 'app-why-buy-ticket',
  standalone: true,
  imports: [
    RetroButtonDirective,
    NgOptimizedImage,
    AsyncPipe,
    NgClass
  ],
  templateUrl: './why-buy-ticket.component.html',
  styleUrl: './why-buy-ticket.component.sass'
})
export class WhyBuyTicketComponent {

  private app = inject(AppService);
  public isPortable$ = this.app.isPortable$;
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;

}

