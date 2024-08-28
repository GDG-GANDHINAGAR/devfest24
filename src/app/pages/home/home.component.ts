import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {LINKS} from "../../constants/links";
import {AboutDevfestComponent} from "../../comonents/about-devfest/about-devfest.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutDevfestComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
    protected readonly LINKS = LINKS;
}
