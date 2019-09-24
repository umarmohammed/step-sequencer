import { Injectable } from '@angular/core';
import { SequenceService } from './sequence.service';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Channel } from '../types/channel';
import { CurrentChannel } from '../models/current-channel';

type SwitchState = { [K in Channel]: BehaviorSubject<boolean[]> };

@Injectable({ providedIn: 'root' })
export class ChannelSequenceFacade {
  private switches$: SwitchState = {
    kick: this.getInitialChannelState(),
    snare: this.getInitialChannelState(),
    clap: this.getInitialChannelState()
  };

  switch$ = (channel: Channel) => this.switches$[channel].asObservable();

  currentChannel$ = (channel: Channel): Observable<CurrentChannel> =>
    combineLatest(this.sequenceService.beats$, this.switches$[channel]).pipe(
      map(
        ([index, switched]): CurrentChannel => ({
          index,
          play: switched[index]
        })
      )
    );

  constructor(private sequenceService: SequenceService) {}

  toggleSwitch(channel: Channel, switchIndex: number): void {
    const switches = this.switches$[channel].value.map((value, index) =>
      index === switchIndex ? !value : value
    );

    this.switches$[channel].next(switches);
  }

  private getInitialChannelState(): BehaviorSubject<boolean[]> {
    return new BehaviorSubject<boolean[]>(
      this.sequenceService.getInitializedChannelSwitches()
    );
  }
}
