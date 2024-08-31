import {Component, inject} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {AsyncPipe, NgClass} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {MatSidenav} from "@angular/material/sidenav";
import {AppService} from "../../services/app.service";
import {RetroButtonDirective} from "../../directives/retro-button.directive";
import {LINKS} from "../../constants/links";
import {RouterLink, RouterLinkActive, Router, RouterModule, ActivatedRoute} from "@angular/router";
import {LineHighlighterDirective} from "../../directives/line-highlighter.directive";


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatButton,
    AsyncPipe,
    MatIcon,
    MatIconButton,
    RetroButtonDirective,
    NgClass,
    RouterLink,
    LineHighlighterDirective,
    RouterLinkActive,
    RouterModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.sass'
})
export class ToolbarComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private app = inject(AppService);
  private router = inject(Router);
  public route = inject(ActivatedRoute);
  isPortable$: Observable<boolean> = this.app.isPortable$

  constructor() {
    this.route.fragment.subscribe(fragment => {
      if (!fragment) {
        this.navigateTo('home')
      }
    })
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe(value => {
      if (!value.matches) {
        this.app.closeDrawer()
      }
    })
  }

  navigateTo(fragment: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      fragment: fragment
    });
  }

  toggleDrawer() {
    this.app.toggleDrawer()
  }

  protected readonly LINKS = LINKS.home;
}
