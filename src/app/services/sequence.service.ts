import { Injectable } from '@angular/core';
import { interval, BehaviorSubject, combineLatest } from 'rxjs';
import { map, filter, scan, distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SequenceService {
  static readonly numQuerterNotes = 8;

  private interval$ = interval(250);

  private playingSubject = new BehaviorSubject<boolean>(false);
  playing$ = this.playingSubject.asObservable();

  beats$ = combineLatest(this.playing$, this.interval$).pipe(
    filter(([playing]) => playing),
    map(([, interval]) => interval),
    scan(acc => (acc += 1) % SequenceService.numQuerterNotes),
    distinctUntilChanged()
  );

  togglePlaying() {
    this.playingSubject.next(!this.playingSubject.value);
  }

  getInitializedChannelSwitches(): boolean[] {
    return new Array(SequenceService.numQuerterNotes).fill(false);
  }
}
