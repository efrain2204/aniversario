import {Component, computed, inject} from '@angular/core';
import {FilterEnum, NotesService} from "../../services/notes.service";
import {NotesFirebaseService} from "../../services/notes-firebase.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  notesService = inject(NotesService);
  notesFirebaseService = inject(NotesFirebaseService);
  editingId: string | null = null;

  visibleTodos = computed(() => {
    const todos = this.notesService.todosSig();
    const filter = this.notesService.filterSig();

    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  });

  isAllTodosSelected = computed(() =>
    this.notesService.todosSig().every((todo) => todo.isCompleted)
  );

  noTodosClass = computed(() => this.notesService.todosSig().length === 0);

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    const requests$ = this.notesService.todosSig().map((todo) => {
      return this.notesFirebaseService.updateTodo(todo.id, {
        text: todo.text,
        isCompleted: target.checked,
      });
    });
    forkJoin(requests$).subscribe(() => {
      this.notesService.toggleAll(target.checked);
    });
  }
}
