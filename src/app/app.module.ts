import {importProvidersFrom, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MusicPlayerComponent} from "./shared/music-player/music-player.component";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_y4_jyYxBw4rJU5rEzwgbYuuOsCPsZ5U",
  authDomain: "journal-app-76966.firebaseapp.com",
  projectId: "journal-app-76966",
  storageBucket: "journal-app-76966.firebasestorage.app",
  messagingSenderId: "561905784174",
  appId: "1:561905784174:web:2027276056e287efa79d7f"
};

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MusicPlayerComponent,
    ],
  providers: [
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
