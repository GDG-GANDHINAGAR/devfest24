import {Component, inject} from '@angular/core';
import {AppService} from "../../services/app.service";
import {AsyncPipe, NgClass, NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from "../../pages/home/header/header.component";
import {TestimonialComponent} from "../tetimonial/testimonial.component";
import {TESTIMONIALS, TICKETS} from "../../constants/data";
import {WhyBuyTicketComponent} from "../why-buy-ticket/why-buy-ticket.component";
import {LastYearComponent} from "../last-year/last-year.component";
import {TicketsComponent} from "../tickets/tickets.component";
import {WhatIsDevfestComponent} from "../what-is-devfest/what-is-devfest.component";
import {PastSpeakersComponent} from "../past-speakers/past-speakers.component";

@Component({
  selector: 'app-about-devfest',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    HeaderComponent,
    NgOptimizedImage,
    TestimonialComponent,
    WhyBuyTicketComponent,
    LastYearComponent,
    TicketsComponent,
    WhatIsDevfestComponent,
    PastSpeakersComponent
  ],
  templateUrl: './about-devfest.component.html',
  styleUrl: './about-devfest.component.sass'
})
export class AboutDevfestComponent {
  private app = inject(AppService);
  public isPortable$ = this.app.isPortable$;
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;
  protected readonly TESTIMONIALS = TESTIMONIALS;
  protected readonly TICKETS = TICKETS;
}
