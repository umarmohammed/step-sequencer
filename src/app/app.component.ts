import { Component } from '@angular/core';
import { interval, Subject, NEVER } from 'rxjs';
import { switchMap, tap, startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private interval$ = interval(2000).pipe(
    switchMap(() =>
      interval(500).pipe(
        map(i => i + 2),
        startWith(1)
      )
    )
  );

  play = new Subject<boolean>();
  play$ = this.play.pipe(
    switchMap(playing => (playing ? this.interval$ : NEVER))
  );

  items = [1, 2, 3, 4];
}
