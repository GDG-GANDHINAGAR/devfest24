import {Component, inject} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {AsyncPipe, NgClass} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {MatSidenav} from "@angular/material/sidenav";
import {AppService} from "../../services/app.service";
import {RetroButtonDirective} from "../../directives/retro-button.directive";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatButton,
    AsyncPipe,
    MatIcon,
    MatIconButton,
    RetroButtonDirective,
    NgClass
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.sass'
})
export class ToolbarComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private app = inject(AppService);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor() {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe(value => {
      if (!value.matches) {
        this.app.closeDrawer()
      }
    })
  }

  toggleDrawer() {
    this.app.toggleDrawer()
  }
}
