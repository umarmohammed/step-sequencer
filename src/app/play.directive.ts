import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPlay]'
})
export class PlayDirective {
  constructor(private el: ElementRef) {}

  @Input('appPlay')
  set play(value: number) {
    if (value) {
      this.el.nativeElement.play();
    }
  }
}
