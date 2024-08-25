import {effect, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private drawer = signal(false,);
  public drawer$ = this.drawer.asReadonly();

  constructor() {
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
