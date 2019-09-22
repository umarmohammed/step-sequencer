import { Injectable } from '@angular/core';
import { SequenceService } from './sequence.service';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { Channel } from '../types/channel';
import { CurrentChannel } from '../models/current-channel';

type SwitchState = { [K in Channel]: BehaviorSubject<boolean[]> };

@Injectable({ providedIn: 'root' })
export class ChannelSequenceFacade {
  private switches$: SwitchState = {
    kick: new BehaviorSubject<boolean[]>(
      this.sequenceService.getInitializedChannelSwitches()
    ),
    snare: new BehaviorSubject<boolean[]>(
      this.sequenceService.getInitializedChannelSwitches()
    )
  };

  switch$ = (channel: Channel) => this.switches$[channel].asObservable();

  currentChannel$ = (channel: Channel): Observable<CurrentChannel> =>
    combineLatest(this.sequenceService.beats$, this.switches$[channel]).pipe(
      map(
        ([index, switched]): CurrentChannel => ({
          index,
          play: switched[index]
        })
      ),
      tap(console.log)
    );

  constructor(private sequenceService: SequenceService) {}

  toggleSwitch(channel: Channel, switchIndex: number) {
    const switches = this.switches$[channel].value.map((value, index) =>
      index === switchIndex ? !value : value
    );

    this.switches$[channel].next(switches);
  }
}
