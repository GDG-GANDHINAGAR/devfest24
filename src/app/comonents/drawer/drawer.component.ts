import {Component, inject} from '@angular/core';
import {LINKS} from "../../constants/links";
import {AsyncPipe, NgClass} from "@angular/common";
import {RetroButtonDirective} from "../../directives/retro-button.directive";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {AppService} from "../../services/app.service";
import {AppColors} from "../../constants/enums";
import {LineHighlighterDirective} from "../../directives/line-highlighter.directive";

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [
    AsyncPipe,
    RetroButtonDirective,
    RouterLink,
    LineHighlighterDirective,
    NgClass
  ],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.sass'
})
export class DrawerComponent {
  protected readonly LINKS = LINKS;
  protected readonly AppColors = AppColors;
  private router = inject(Router);
  public route = inject(ActivatedRoute);

  navigateTo(fragment: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      fragment: fragment
    });
  }
}
