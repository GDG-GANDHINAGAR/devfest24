import {Component, HostListener, Inject, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AppService} from "../../../services/app.service";
import {AsyncPipe, isPlatformBrowser, NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe,
    NgStyle,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {
  private app = inject(AppService)
  isLandscape$ = this.app.isLandscape$;



  ngOnInit(): void {
  }
}
