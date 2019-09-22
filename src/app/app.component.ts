import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timer$ = interval(1000);
  private subscription = new Subscription();

  play(audioPlayer: HTMLAudioElement) {
    this.subscription = this.timer$.subscribe(() => audioPlayer.play());
  }

  stop() {
    this.subscription.unsubscribe();
  }
}
