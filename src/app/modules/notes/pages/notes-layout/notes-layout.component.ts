import {Component, inject, OnInit} from '@angular/core';
import {NotesService} from "../../services/notes.service";
import {NotesFirebaseService} from "../../services/notes-firebase.service";
import {modelSimpleQuestion} from "../../../../shared/popup/popup.component";
import {FormControl} from "@angular/forms";
import {Validators} from "../../../../utils/Validators/Validators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notes-layout',
  templateUrl: './notes-layout.component.html',
  styleUrls: ['./notes-layout.component.scss']
})
export class NotesLayoutComponent implements OnInit  {
  notesService = inject(NotesService);
  notesFirebaseService = inject(NotesFirebaseService);
  router = inject(Router)

  newNoteModal:modelSimpleQuestion | undefined
  titleNoteControl = new FormControl('',[Validators.required]);
  noteControl = new FormControl('',[Validators.required]);

  ngOnInit(): void {
    this.notesFirebaseService.getTodos().subscribe((todos) => {
      this.notesService.todosSig.set(todos);
    });
  }

  openNewNote(){
    this.newNoteModal = {
      question: '¿Que deseas anotar?',
      button1Text:'Guardar',
      onButton1Click:()=>{
        const title = this.titleNoteControl.getRawValue()
        const text = this.noteControl.getRawValue()
        if(!text || !title){
          return;
        }
        this.notesFirebaseService.addTodo(title,text).subscribe((addedTodoId) => {
          this.notesService.addTodo(title,text, addedTodoId);
          this.noteControl.setValue('')
          this.titleNoteControl.setValue('')
        });
        this.clearModal()
      }
    }
  }
  clearModal(){
    this.newNoteModal = undefined
    this.noteControl.setValue('')
    this.titleNoteControl.setValue('')
  }
  back(){
    this.router.navigate(['/auth']);
  }
}
