import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-channel-sequence-display',
  templateUrl: './channel-sequence-display.component.html',
  styleUrls: ['./channel-sequence-display.component.css']
})
export class ChannelSequenceDisplayComponent {
  @Input()
  switches: boolean[];

  @Input()
  index: number;

  @Output()
  switchToggled: EventEmitter<number> = new EventEmitter<number>();
}
