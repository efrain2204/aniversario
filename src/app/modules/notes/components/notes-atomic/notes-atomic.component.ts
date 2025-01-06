import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {NotesService, TodoInterface} from "../../services/notes.service";
import {NotesFirebaseService} from "../../services/notes-firebase.service";
import {FormControl} from "@angular/forms";
import {Validators} from "../../../../utils/Validators/Validators";

@Component({
  selector: 'app-notes-atomic',
  templateUrl: './notes-atomic.component.html',
  styleUrls: ['./notes-atomic.component.scss']
})
export class NotesAtomicComponent implements OnInit, OnChanges{
  @Input({ required: true }) todo!: TodoInterface;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();

  @ViewChild('textInput') textInput?: ElementRef;

  todosService = inject(NotesService);
  todosFirebaseService = inject(NotesFirebaseService);

  noteControl = new FormControl('',[Validators.required]);


  ngOnInit(): void {
    this.noteControl.setValue(this.todo.text);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      }, 0);
    }
  }

  changeTodo(): void {
    const text = this.noteControl.getRawValue()
    const currentDate = new Date();
    if(!text){
      return;
    }
    const dataToUpdate = {
      text: text,
      title: this.todo.title,
      time:currentDate.toISOString(),
      isCompleted: this.todo.isCompleted,
    };

    this.todosFirebaseService
      .updateTodo(this.todo.id, dataToUpdate)
      .subscribe(() => {
        this.todosService.changeTodo(this.todo.id, text);
      });

    this.setEditingId.emit(null);
  }

  removeTodo(): void {
    this.todosFirebaseService.removeTodo(this.todo.id).subscribe(() => {
      this.todosService.removeTodo(this.todo.id);
    });
  }
}
