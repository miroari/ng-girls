import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../interfaces/todo-item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() item!: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  viewMode: 'view' | 'edit' = 'view';
  title: string = '';

  removeItem(): void {
    this.remove.emit(this.item);
  }

  editValue(): void {
    this.title = this.item.title;
    this.viewMode = 'edit';
  }

  cancelEdit(): void {
    this.viewMode = 'view';
    this.title = '';
  }

  updateTitle(): void {
    this.update.emit({
      item: this.item,
      changes: { title: this.title },
    });
    this.cancelEdit();
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed },
    });
  }
}
