import {Component, computed, inject} from '@angular/core';
import {FilterEnum, NotesService} from "../../services/notes.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  todosService = inject(NotesService);
  filterSig = this.todosService.filterSig;
  filterEnum = FilterEnum;
  activeCount = computed(() => {
    return this.todosService.todosSig().filter((todo) => !todo.isCompleted)
      .length;
  });
  noTodosClass = computed(() => this.todosService.todosSig().length === 0);
  itemsLeftText = computed(
    () => `item${this.activeCount() !== 1 ? 's' : ''} left`
  );

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
    console.log('after changeFilter', this.todosService.filterSig());
  }
}
