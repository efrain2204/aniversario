import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesLayoutComponent } from './pages/notes-layout/notes-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NotesAtomicComponent } from './components/notes-atomic/notes-atomic.component';


@NgModule({
  declarations: [
    NotesLayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NotesAtomicComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
