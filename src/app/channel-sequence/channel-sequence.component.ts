import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { ChannelSequenceFacade } from '../services/channel-sequence.facade';
import { Channel } from '../types/channel';
import { Observable } from 'rxjs';
import { CurrentChannel } from '../models/current-channel';

@Component({
  selector: 'app-channel-sequence',
  templateUrl: './channel-sequence.component.html',
  styleUrls: ['./channel-sequence.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelSequenceComponent implements OnInit {
  @Input()
  src: string;

  @Input()
  channel: Channel;

  switches$: Observable<boolean[]>;

  currentChannel$: Observable<CurrentChannel>;

  constructor(public facade: ChannelSequenceFacade) {}

  ngOnInit(): void {
    this.switches$ = this.facade.switch$(this.channel);
    this.currentChannel$ = this.facade.currentChannel$(this.channel);
  }
}
