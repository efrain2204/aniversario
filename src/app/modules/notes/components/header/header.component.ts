import {Component, inject} from '@angular/core';
import {NotesService} from "../../services/notes.service";
import {NotesFirebaseService} from "../../services/notes-firebase.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  todosService = inject(NotesService);
  todosFirebaseService = inject(NotesFirebaseService);
  text: string = '';

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.todosFirebaseService.addTodo(this.text).subscribe((addedTodoId) => {
      this.todosService.addTodo(this.text, addedTodoId);
      this.text = '';
    });
  }
}
