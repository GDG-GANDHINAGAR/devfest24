import {Component, inject, Input} from '@angular/core';
import {RetroButtonDirective} from "../../directives/retro-button.directive";
import {NgClass} from "@angular/common";
import {TicketType} from "../../types/ticket.type";
import {TICKETS} from "../../constants/data";
import {AppColors} from "../../constants/enums";
import {Analytics, logEvent} from "@angular/fire/analytics";
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [
    RetroButtonDirective,
    NgClass
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.sass'
})
export class TicketsComponent {

  protected readonly TICKETS = TICKETS;
  protected readonly AppColors = AppColors;
  private app = inject(AppService);
  private analytics = inject(Analytics);

  openLink(link, ticketTitle) {
    logEvent(this.analytics, 'click', {event_category: 'button', event_label: `buy_ticket_${ticketTitle}`});
    if (this.app.isBrowser) {
      open(link, '_blank');
    }
  }
}
