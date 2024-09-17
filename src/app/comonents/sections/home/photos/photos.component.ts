import { Component } from '@angular/core';
import {RetroButtonDirective} from "../../../../directives/retro-button.directive";
import {PHOTOS} from "../../../../constants/data";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [
    RetroButtonDirective,
    NgOptimizedImage
  ],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.sass'
})
export class PhotosComponent {

  protected readonly PHOTOS = PHOTOS;
}
