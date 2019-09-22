import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayDirective } from './play.directive';
import { ChannelSequenceComponent } from './channel-sequence/channel-sequence.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayDirective,
    ChannelSequenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
