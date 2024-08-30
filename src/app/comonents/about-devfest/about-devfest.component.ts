import {Component, inject} from '@angular/core';
import {AppService} from "../../services/app.service";
import {AsyncPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-about-devfest',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe
  ],
  templateUrl: './about-devfest.component.html',
  styleUrl: './about-devfest.component.sass'
})
export class AboutDevfestComponent {
  private app = inject(AppService);
  public isPortable$ = this.app.isPortable$;
}
