import { TodoItem } from '../interfaces/todo-item';
import { createReducer, on } from '@ngrx/store';
import * as ToDoActions from './todo.actions';

export interface ToDoState {
  list: TodoItem[];
}

export const initialState: ToDoState = {
  list: [],
};

export const todoReducer = createReducer(
  initialState,
  on(ToDoActions.create, (state, action) => {
    return {
      ...state,
      list: [...state.list, { title: action.title, completed: false }],
    };
  }),
  on(ToDoActions.deleteTodo, (state, action) => {
    return {
      ...state,
      list: state.list.filter((val) => val.title !== action.title),
    };
  }),
  on(ToDoActions.updateTodo, (state, action) => {
    return {
      ...state,
      list: state.list.map((val) =>
        val.title === action.title ? { ...val, ...action.changes } : val
      ),
    };
  })
);
