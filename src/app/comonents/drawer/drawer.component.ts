import {Component, inject} from '@angular/core';
import {LINKS} from "../../constants/links";
import {AsyncPipe} from "@angular/common";
import {RetroButtonDirective} from "../../directives/retro-button.directive";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {AppService} from "../../services/app.service";
import {AppColors} from "../../constants/enums";

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [
    AsyncPipe,
    RetroButtonDirective,
    RouterLink
  ],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.sass'
})
export class DrawerComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private app = inject(AppService);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small,])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    protected readonly LINKS = LINKS;
  protected readonly AppColors = AppColors;
}
