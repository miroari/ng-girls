import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { todoReducer } from './store/todo.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'todo', reducer: todoReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
