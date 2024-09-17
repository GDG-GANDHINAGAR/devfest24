import {Component, inject} from '@angular/core';
import {TECHS} from "../../../../constants/data";
import {AsyncPipe, NgClass} from "@angular/common";
import {AppService} from "../../../../services/app.service";
import {RetroButtonDirective} from "../../../../directives/retro-button.directive";

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    RetroButtonDirective
  ],
  templateUrl: './join.component.html',
  styleUrl: './join.component.sass'
})
export class JoinComponent {
  private app = inject(AppService);
  public isPortable$ = this.app.isPortable$;
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;
  protected readonly TECHS = TECHS;
}
