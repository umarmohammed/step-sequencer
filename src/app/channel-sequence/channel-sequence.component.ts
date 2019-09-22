import { Component } from '@angular/core';
import { SequenceService } from '../services/sequence.service';

@Component({
  selector: 'app-channel-sequence',
  templateUrl: './channel-sequence.component.html',
  styleUrls: ['./channel-sequence.component.css']
})
export class ChannelSequenceComponent {
  items = [1, 2, 3, 4];

  constructor(public sequence: SequenceService) {}
}
