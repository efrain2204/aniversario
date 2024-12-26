import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MusicPlayerComponent} from "./shared/music-player/music-player.component";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MusicPlayerComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
