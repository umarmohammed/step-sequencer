import { Component, Input } from '@angular/core';
import { SequenceService } from '../services/sequence.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-channel-sequence',
  templateUrl: './channel-sequence.component.html',
  styleUrls: ['./channel-sequence.component.css']
})
export class ChannelSequenceComponent {
  items = [1, 2, 3, 4];

  @Input()
  src: string;

  beat$ = this.sequence.beats$.pipe(filter(beat => this.items.includes(beat)));

  constructor(public sequence: SequenceService) {}
}
