import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {LINKS} from "../../constants/links";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
    protected readonly LINKS = LINKS;
}
