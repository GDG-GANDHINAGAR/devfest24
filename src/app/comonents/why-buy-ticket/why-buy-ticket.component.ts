import { Component } from '@angular/core';
import {RetroButtonDirective} from "../../directives/retro-button.directive";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-why-buy-ticket',
  standalone: true,
  imports: [
    RetroButtonDirective,
    NgOptimizedImage
  ],
  templateUrl: './why-buy-ticket.component.html',
  styleUrl: './why-buy-ticket.component.sass'
})
export class WhyBuyTicketComponent {

}
