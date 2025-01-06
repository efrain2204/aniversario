import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesLayoutComponent } from './pages/notes-layout/notes-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { NotesAtomicComponent } from './components/notes-atomic/notes-atomic.component';
import {PopupComponent} from "../../shared/popup/popup.component";
import {ImageRendererComponent} from "../../shared/image-renderer/image-renderer.component";
import {TextAreaComponent} from "../../shared/text-area/text-area.component";
import {ButtonComponent} from "../../shared/button/button.component";
import {EmptyComponent} from "../../shared/empty/empty.component";
import {BunnyInputComponent} from "../../shared/bunny-input/bunny-input.component";
import { CustomDatePipe } from './pipes/custom-date.pipe';


@NgModule({
  declarations: [
    NotesLayoutComponent,
    FooterComponent,
    MainComponent,
    NotesAtomicComponent,
    CustomDatePipe
  ],
    imports: [
        CommonModule,
        NotesRoutingModule,
        PopupComponent,
        ImageRendererComponent,
        TextAreaComponent,
        ButtonComponent,
        EmptyComponent,
        BunnyInputComponent
    ]
})
export class NotesModule { }
