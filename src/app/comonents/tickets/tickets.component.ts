import {Component, Input} from '@angular/core';
import {RetroButtonDirective} from "../../directives/retro-button.directive";
import {NgClass} from "@angular/common";
import {TicketType} from "../../types/ticket.type";
import {TICKETS} from "../../constants/data";
import {AppColors} from "../../constants/enums";

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
}
