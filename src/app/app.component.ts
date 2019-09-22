import { Component } from '@angular/core';
import { SequenceService } from './services/sequence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public sequence: SequenceService) {}

  items = [1, 2, 3, 4];
}
