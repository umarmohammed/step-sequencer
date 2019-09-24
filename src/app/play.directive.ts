import { Directive, Input, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { ChannelSequenceComponent } from './channel-sequence/channel-sequence.component';

@Directive({
  selector: '[appPlay]'
})
export class PlayDirective implements OnInit {
  private audio: any;

  constructor(private channel: ChannelSequenceComponent) {}

  ngOnInit(): void {
    this.audio = new Howl({
      src: [this.channel.src]
    });
  }

  @Input('appPlay')
  set play(value: boolean) {
    if (value) {
      this.audio.play();
    }
  }
}
