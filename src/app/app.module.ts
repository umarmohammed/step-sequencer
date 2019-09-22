import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayDirective } from './play.directive';
import { ChannelSequenceComponent } from './channel-sequence/channel-sequence.component';
import { ChannelSequenceDisplayComponent } from './channel-sequence-display/channel-sequence-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayDirective,
    ChannelSequenceComponent,
    ChannelSequenceDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
