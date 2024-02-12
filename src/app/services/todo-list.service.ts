import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import { Store } from '@ngrx/store';
import { AppState, selectToDoList } from '../store';
import { create, deleteTodo, updateTodo } from '../store/todo.actions';
import { first, Observable } from 'rxjs';

const todoListStorageKey = 'Todo_List';

const defaultTodoList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: TodoItem[] = [];

  constructor(
    private storageService: StorageService,
    private store: Store<AppState>
  ) {
    this.todoList =
      this.storageService.getData(todoListStorageKey) || defaultTodoList;
    this.todoList.forEach((todo) =>
      store.dispatch(create({ title: todo.title }))
    );
  }

  saveList(): void {
    this.getTodoList$()
      .pipe(first(Boolean))
      .subscribe((todoList) =>
        this.storageService.setData(todoListStorageKey, todoList)
      );
  }

  addItem(item: TodoItem): void {
    this.store.dispatch(create({ title: item.title }));
    this.saveList();
  }

  updateItem(item: TodoItem, changes: any): void {
    this.store.dispatch(updateTodo({ title: item.title, changes }));
    this.saveList();
  }

  deleteItem(item: TodoItem): void {
    this.store.dispatch(deleteTodo({ title: item.title }));
    this.saveList();
  }

  getTodoList$(): Observable<TodoItem[]> {
    return this.store.select(selectToDoList);
  }
}
