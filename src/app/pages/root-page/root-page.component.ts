import {Component, inject, effect, ViewChild, AfterViewInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavContent, MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {ToolbarComponent} from "../../comonents/toolbar/toolbar.component";
import {AppService} from "../../services/app.service";
import {DrawerComponent} from "../../comonents/drawer/drawer.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "../../comonents/sections/footer/footer.component";

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
    DrawerComponent,
    RouterOutlet,
    FooterComponent,
  ]
})
export class RootPageComponent implements AfterViewInit {
  app = inject(AppService)
  sideNavState = this.app.drawer$
  @ViewChild('content') matSidenavContent: MatSidenavContent

  constructor() {
  }

  ngAfterViewInit() {
    this.app.setMatSidenavContent(this.matSidenavContent)
  }


  closeDrawer() {
    this.app.closeDrawer()
  }
}
