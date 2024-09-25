import {Component, HostListener, Inject, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AppService} from "../../../services/app.service";
import {AsyncPipe, isPlatformBrowser, JsonPipe, NgClass, NgOptimizedImage, NgStyle} from "@angular/common";
import {HeaderElement} from "../../../types/header.type";
import {HEADER_TEXT} from "../../../constants/data";
import {MatIcon} from "@angular/material/icon";
import {RetroButtonDirective} from "../../../directives/retro-button.directive";
import {AppColors} from "../../../constants/enums";
import {app} from "../../../../../server";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    NgStyle,
    NgOptimizedImage,
    NgClass,
    JsonPipe,
    MatIcon,
    RetroButtonDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  private app = inject(AppService)
  isLandscape$ = this.app.isLandscape$;
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;
  protected readonly AppColors = AppColors;
  protected readonly HEADER_TEXT = HEADER_TEXT;

  scrollToTicket(tickets: string) {
    if (this.app.isBrowser) {
      const el = document.getElementById(tickets);
      if (el) {
        const box = el.getBoundingClientRect();
        this.app.homeScrollElement.scrollTo({behavior: 'smooth', top: box.top - 100});
      }
    }
  }
}


