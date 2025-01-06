import {Injectable, signal} from '@angular/core';

export interface TodoInterface {
  id: string;
  text: string;
  title: string;
  time: string;
  isCompleted: boolean;
}

export enum FilterEnum {
  all = 'all',
  active = 'active',
  completed = 'completed',
}


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  todosSig = signal<TodoInterface[]>([]);
  filterSig = signal<FilterEnum>(FilterEnum.all);

  changeFilter(filterName: FilterEnum): void {
    this.filterSig.set(filterName);
  }

  addTodo(title:string, text: string, id: string): void {
    const currentDate = new Date();
    const newTodo: TodoInterface = {
      text,
      title,
      isCompleted: false,
      time:currentDate.toISOString(),
      id,
    };
    this.todosSig.update((todos) => [...todos, newTodo]);
  }

  changeTodo(id: string, text: string): void {
    this.todosSig.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }

  removeTodo(id: string): void {
    this.todosSig.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  toggleTodo(id: string): void {
    this.todosSig.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  toggleAll(isCompleted: boolean): void {
    this.todosSig.update((todos) =>
      todos.map((todo) => ({ ...todo, isCompleted }))
    );
  }
}
