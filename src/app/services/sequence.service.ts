import { Injectable } from '@angular/core';
import { interval, Subject, NEVER } from 'rxjs';
import { switchMap, map, startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SequenceService {
  private interval$ = interval(2000).pipe(
    switchMap(() =>
      interval(500).pipe(
        map(i => i + 2),
        startWith(1)
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
}
