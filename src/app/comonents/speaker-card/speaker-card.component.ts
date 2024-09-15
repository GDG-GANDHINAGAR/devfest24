import {Component, Input} from '@angular/core';
import {SpeakerData} from "../../types/speaker.type";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-speaker-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './speaker-card.component.html',
  styleUrl: './speaker-card.component.sass'
})
export class SpeakerCardComponent {
  @Input({required: true}) speaker: SpeakerData;

}
