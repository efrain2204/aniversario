import {Component, inject} from '@angular/core';
import {NotesService} from "../../services/notes.service";
import {NotesFirebaseService} from "../../services/notes-firebase.service";

@Component({
  selector: 'app-notes-layout',
  templateUrl: './notes-layout.component.html',
  styleUrls: ['./notes-layout.component.scss']
})
export class NotesLayoutComponent {
  todosService = inject(NotesService);
  todosFirebaseService = inject(NotesFirebaseService);

  ngOnInit(): void {
    this.todosFirebaseService.getTodos().subscribe((todos) => {
      this.todosService.todosSig.set(todos);
    });
  }
}
