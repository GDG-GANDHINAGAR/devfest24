import {Component, inject, Renderer2} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {AsyncPipe, NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AppService} from "../../../services/app.service";
import {FOOTER_LINKS} from "../../../constants/data";
import {app} from "../../../../../server";
import {RetroButtonDirective} from "../../../directives/retro-button.directive";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatIcon,
    NgClass,
    RouterLink,
    AsyncPipe,
    RetroButtonDirective
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  private app = inject(AppService);
  public isPortable$ = this.app.isPortable$;
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;
  protected readonly FOOTER_LINKS = FOOTER_LINKS;

  constructor() {
  }

  ngOnDestroy() {
  }

  ngAfterViewInit() {
  }

  onGoToTopClick() {
    if (this.app.isBrowser) {
      document.getElementsByClassName('mat-drawer-content ')[0].scroll({top: 0, behavior: "smooth"})
    }
  }
}
