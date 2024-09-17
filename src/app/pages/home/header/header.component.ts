import {Component, HostListener, Inject, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AppService} from "../../../services/app.service";
import {AsyncPipe, isPlatformBrowser, JsonPipe, NgClass, NgOptimizedImage, NgStyle} from "@angular/common";
import {HeaderElement} from "../../../types/header.type";
import {HEADER_TEXT} from "../../../constants/data";
import {MatIcon} from "@angular/material/icon";
import {RetroButtonDirective} from "../../../directives/retro-button.directive";
import {AppColors} from "../../../constants/enums";

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
}


