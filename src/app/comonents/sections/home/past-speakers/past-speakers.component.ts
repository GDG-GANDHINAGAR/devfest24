import { Component } from '@angular/core';
import {SpeakerCardComponent} from "../../../speaker-card/speaker-card.component";
import { PAST_SPEAKERS } from '../../../../constants/data';

@Component({
  selector: 'app-past-speakers',
  standalone: true,
  imports: [
    SpeakerCardComponent
  ],
  templateUrl: './past-speakers.component.html',
  styleUrl: './past-speakers.component.sass'
})
export class PastSpeakersComponent {

  protected readonly PAST_SPEAKERS = PAST_SPEAKERS;
}
