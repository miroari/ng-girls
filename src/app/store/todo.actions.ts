import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[ToDo] Create ToDo',
  props<{ title: string }>()
);

export const deleteTodo = createAction(
  '[ToDo] Delete ToDo',
  props<{ title: string }>()
);

export const updateTodo = createAction(
  '[ToDo] Update ToDo',
  props<{ title: string; changes: any }>()
);
