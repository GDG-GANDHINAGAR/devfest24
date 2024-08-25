import {Component, inject, effect} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {ToolbarComponent} from "../../comonents/toolbar/toolbar.component";
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrl: './root-page.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    ToolbarComponent,
  ]
})
export class RootPageComponent {
  app = inject(AppService)
  sideNavState = this.app.drawer$


  constructor() {
  }


  closeDrawer() {
    this.app.closeDrawer()
  }
}
