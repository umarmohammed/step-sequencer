import { Component, Input } from '@angular/core';
import { SequenceService } from '../services/sequence.service';

@Component({
  selector: 'app-channel-sequence',
  templateUrl: './channel-sequence.component.html'
})
export class ChannelSequenceComponent {
  @Input()
  src: string;

  @Input()
  beat: number;

  switches = SequenceService.getInitializedChannelSwitches();
}
