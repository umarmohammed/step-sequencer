import { Injectable } from '@angular/core';
import { interval, Subject, NEVER } from 'rxjs';
import { switchMap, map, startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SequenceService {
  private readonly numQuerterNotes = 8;

  private interval$ = interval(2000).pipe(
    switchMap(() =>
      interval(250).pipe(
        map(i => i + 1),
        startWith(0)
      )
    )
  );

  private playSubject = new Subject<boolean>();
  beats$ = this.playSubject.pipe(
    switchMap(playing => (playing ? this.interval$ : NEVER))
  );

  set play(value: boolean) {
    this.playSubject.next(value);
  }

  getInitializedChannelSwitches(): boolean[] {
    return new Array(this.numQuerterNotes).fill(false);
  }
}
