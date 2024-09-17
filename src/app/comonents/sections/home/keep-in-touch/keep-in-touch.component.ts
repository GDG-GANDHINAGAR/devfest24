import {Component, inject} from '@angular/core';
import {AppService} from "../../../../services/app.service";
import {AsyncPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-keep-in-touch',
  standalone: true,
  imports: [
    AsyncPipe,
    NgClass
  ],
  templateUrl: './keep-in-touch.component.html',
  styleUrl: './keep-in-touch.component.sass'
})
export class KeepInTouchComponent {
  private app = inject(AppService);
  public isPortable$ = this.app.isPortable$;
  isMobile$ = this.app.isMobile$;
  isTab$ = this.app.isTab$;
}
