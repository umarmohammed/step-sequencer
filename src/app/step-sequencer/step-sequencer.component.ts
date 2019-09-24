import { Component } from '@angular/core';
import { SequenceService } from '../services/sequence.service';

@Component({
  selector: 'app-step-sequencer',
  templateUrl: './step-sequencer.component.html',
  styleUrls: ['./step-sequencer.component.css']
})
export class StepSequencerComponent {
  constructor(public sequence: SequenceService) {}
}
