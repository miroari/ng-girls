import { createSelector } from '@ngrx/store';
import { ToDoState } from './todo.reducer';

export interface AppState {
  todo: ToDoState;
}

export const selectToDo = (state: AppState) => state.todo;

export const selectToDoList = createSelector(
  selectToDo,
  (state: ToDoState) => state.list
);
export const selectToDoCount = createSelector(
  selectToDo,
  (state: ToDoState) => state.list.length
);
