import { Injectable } from '@angular/core';
import { interval, BehaviorSubject, combineLatest } from 'rxjs';
import { map, filter, scan, distinctUntilChanged, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SequenceService {
  static readonly numQuerterNotes = 16;

  private interval$ = interval(250);

  private playingSubject = new BehaviorSubject<boolean>(false);
  playing$ = this.playingSubject.asObservable();

  constructor() {
    combineLatest(this.playing$, this.interval$)
      .pipe(
        filter(([playing]) => playing),
        map(([, interval]) => interval),
        scan(acc => (acc += 1) % SequenceService.numQuerterNotes),
        distinctUntilChanged(),
        tap(v => this.beatsSubject.next(v))
      )
      .subscribe();
  }

  private beatsSubject = new BehaviorSubject<number>(0);
  beats$ = this.beatsSubject.asObservable();

  togglePlaying() {
    this.playingSubject.next(!this.playingSubject.value);
  }

  static getInitializedChannelSwitches(): boolean[] {
    return new Array(SequenceService.numQuerterNotes).fill(false);
  }
}
