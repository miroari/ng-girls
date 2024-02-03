import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import {InputButtonUnitComponent} from "./input-button-unit/input-button-unit.component";
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {TodoItem} from "./interfaces/todo-item";
import {ListManagerComponent} from "./list-manager/list-manager.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, InputButtonUnitComponent, TodoItemComponent, ListManagerComponent],
  template: `
    <h1 class="app-title">
      Welcome to {{ title }}!
    </h1>

    <app-list-manager></app-list-manager>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My To-Do List App';
}
