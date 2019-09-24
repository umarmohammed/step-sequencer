import { Injectable } from '@angular/core';
import { interval, Subject, NEVER } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SequenceService {
  static readonly numQuerterNotes = 8;

  private interval$ = interval(250).pipe(
    map(i => i % SequenceService.numQuerterNotes)
  );

  private playSubject = new Subject<boolean>();
  beats$ = this.playSubject.pipe(
    switchMap(playing => (playing ? this.interval$ : NEVER))
  );

  set play(value: boolean) {
    this.playSubject.next(value);
  }

  getInitializedChannelSwitches(): boolean[] {
    return new Array(SequenceService.numQuerterNotes).fill(false);
  }
}
