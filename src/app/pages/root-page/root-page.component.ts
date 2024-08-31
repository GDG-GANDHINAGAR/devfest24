import {Component, inject, effect, ViewChild, AfterViewInit} from '@angular/core';
import {AsyncPipe, NgClass} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavContent, MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {ToolbarComponent} from "../../comonents/toolbar/toolbar.component";
import {AppService} from "../../services/app.service";
import {DrawerComponent} from "../../comonents/drawer/drawer.component";
import {RouterOutlet} from "@angular/router";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrl: './root-page.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    ToolbarComponent,
    DrawerComponent,
    RouterOutlet,
    NgClass,
  ]
})
export class RootPageComponent implements AfterViewInit {
  app = inject(AppService)
  sideNavState = this.app.drawer$
  @ViewChild('content') matSidenavContent: MatSidenavContent
  rankConfig = [];
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  prefix = [
    {pos: null},
    {pos: null},
    {pos: null},
    {pos: null},
    {pos: null},
  ];
  suffix = [
    {pos: null},
    {pos: null},
    {pos: null},
    {pos: null},
    {pos: null},
  ];
  imagesMap = [
    {
      path: 'assets/medals/1.png',
      name: 'Herald'
    },
    {
      path: 'assets/medals/2.png',
      name: 'Guardian'
    },
    {
      path: 'assets/medals/3.png',
      name: 'Crusader'
    },
    {
      path: 'assets/medals/4.png',
      name: 'Archon'
    },
    {
      path: 'assets/medals/5.png',
      name: 'Legend'
    },
    {
      path: 'assets/medals/6.png',
      name: 'Ancient'
    },
    {
      path: 'assets/medals/7.png',
      name: 'Divine'
    },
    {
      path: 'assets/medals/8.png',
      name: 'Immortal'
    },
  ]

  someMethod() {
    this.trigger.openMenu();
  }

  constructor() {
  }

  ngAfterViewInit() {
    if (!this.app.isBrowser) return;
    const prefix = localStorage.getItem('prefix')
    const suffix = localStorage.getItem('suffix')
    if (prefix) {
      this.prefix = JSON.parse(prefix)
    }
    if (suffix) {
      this.suffix = JSON.parse(suffix)
    }
  }

  closeDrawer() {
    this.app.closeDrawer()
  }

  onClickRank() {
    console.log('Rank')
  }

  selectPos(pos: any, suffix: any, selectedIndex: any) {

    console.log(pos, suffix, selectedIndex)
    if (suffix) {
      this.suffix[pos].pos = selectedIndex + 1;
    } else {
      this.prefix[pos].pos = selectedIndex + 1;
    }
    if (!this.app.isBrowser) return;
    localStorage.setItem('prefix', JSON.stringify(this.prefix));
    localStorage.setItem('suffix', JSON.stringify(this.suffix));
  }
}
