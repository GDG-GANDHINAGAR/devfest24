import {Component, inject} from '@angular/core';
import {AsyncPipe, NgClass, NgOptimizedImage} from "@angular/common";
import {AppService} from "../../../../services/app.service";
import {RetroButtonDirective} from "../../../../directives/retro-button.directive";
import {Analytics, logEvent} from "@angular/fire/analytics";

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


  protected readonly open = open;

  private analytics = inject(Analytics);
  openLink() {
    logEvent(this.analytics, 'click', {event_category: 'button', event_label: 'guide'});
    if (this.app.isBrowser) {
      open('https://raw.githubusercontent.com/GDG-GANDHINAGAR/devfest24/refs/heads/main/public/assets/DF_24_why_attend.pdf', '_blank');
    }
  }
}

