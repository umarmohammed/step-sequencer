import { Component } from '@angular/core';
import { interval, Subject, NEVER } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  play = new Subject<boolean>();

  play$ = this.play.pipe(
    switchMap(playing => (playing ? interval(1000) : NEVER))
  );
}
