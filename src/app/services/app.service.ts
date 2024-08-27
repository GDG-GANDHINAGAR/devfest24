import {effect, Inject, inject, Injectable, PLATFORM_ID, signal} from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private drawer = signal(false,);
  public drawer$ = this.drawer.asReadonly();
  private breakpoint = inject(BreakpointObserver)
  public isPortable$: Observable<boolean> = this.breakpoint.observe([Breakpoints.XSmall, Breakpoints.Small,])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public isLandscape$: Observable<boolean> = this.breakpoint.observe([Breakpoints.HandsetLandscape, Breakpoints.WebLandscape, Breakpoints.TabletLandscape,])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  toggleDrawer() {
    this.drawer.set(!this.drawer())
  }

  openDrawer() {
    this.drawer.set(true)
  }

  closeDrawer() {
    this.drawer.set(false)
  }
}
