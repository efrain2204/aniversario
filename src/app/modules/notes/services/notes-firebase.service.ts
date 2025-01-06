import {inject, Injectable} from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc} from "@angular/fire/firestore";
import {TodoInterface} from "./notes.service";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesFirebaseService {

  firestore = inject(Firestore);
  todosCollection = collection(this.firestore, 'todos');

  getTodos(): Observable<TodoInterface[]> {
    return collectionData(this.todosCollection, {
      idField: 'id',
    }) as Observable<TodoInterface[]>;
  }

  addTodo(title:string,text: string): Observable<string> {
    const currentDate = new Date();
    const todoToCreate = { title, text, isCompleted: false,time:currentDate.toISOString() };
    const promise = addDoc(this.todosCollection, todoToCreate).then(
      (response) => response.id
    );
    return from(promise);
  }

  removeTodo(todoId: string): Observable<void> {
    const docRef = doc(this.firestore, 'todos/' + todoId);
    const promise = deleteDoc(docRef);
    return from(promise);
  }

  updateTodo(
    todoId: string,
    dataToUpdate: { text: string; isCompleted: boolean }
  ): Observable<void> {
    const docRef = doc(this.firestore, 'todos/' + todoId);
    const promise = setDoc(docRef, dataToUpdate);
    return from(promise);
  }
}
