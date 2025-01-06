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
  editingText: string = '';

  ngOnInit(): void {
    this.editingText = this.todo.text;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isEditing'].currentValue) {
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      }, 0);
    }
  }

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  changeTodo(): void {
    const dataToUpdate = {
      text: this.editingText,
      isCompleted: this.todo.isCompleted,
    };

    this.todosFirebaseService
      .updateTodo(this.todo.id, dataToUpdate)
      .subscribe(() => {
        this.todosService.changeTodo(this.todo.id, this.editingText);
      });

    this.setEditingId.emit(null);
  }

  setTodoInEditMode(): void {
    this.setEditingId.emit(this.todo.id);
  }

  removeTodo(): void {
    this.todosFirebaseService.removeTodo(this.todo.id).subscribe(() => {
      this.todosService.removeTodo(this.todo.id);
    });
  }

  toggleTodo(): void {
    const dataToUpdate = {
      text: this.todo.text,
      isCompleted: !this.todo.isCompleted,
    };
    this.todosFirebaseService
      .updateTodo(this.todo.id, dataToUpdate)
      .subscribe(() => {
        this.todosService.toggleTodo(this.todo.id);
      });
  }
}
