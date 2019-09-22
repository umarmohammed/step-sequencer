import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrentChannel } from '../models/current-channel';

@Component({
  selector: 'app-channel-sequence-display',
  templateUrl: './channel-sequence-display.component.html',
  styleUrls: ['./channel-sequence-display.component.css']
})
export class ChannelSequenceDisplayComponent {
  @Input()
  switches: boolean[];

  @Input()
  currentChannel: CurrentChannel;

  @Output()
  switchToggled: EventEmitter<number> = new EventEmitter<number>();
}
