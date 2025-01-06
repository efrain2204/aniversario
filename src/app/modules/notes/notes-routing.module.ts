import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotesLayoutComponent} from "./pages/notes-layout/notes-layout.component";

const routes: Routes = [
  {
    path: '',
    component: NotesLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
