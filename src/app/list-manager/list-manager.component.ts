import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItem } from '../interfaces/todo-item';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AppComponent } from '../app.component';
import { TodoListService } from '../services/todo-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-manager',
  standalone: true,
  imports: [
    CommonModule,
    InputButtonUnitComponent,
    TodoItemComponent,
    AppComponent,
  ],
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss'],
})
export class ListManagerComponent {
  todoList$: Observable<TodoItem[]>;

  constructor(private todoListService: TodoListService) {
    this.todoList$ = this.todoListService.getTodoList$();
  }

  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }

  removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(item: TodoItem, changes: any): void {
    this.todoListService.updateItem(item, changes);
  }
}
