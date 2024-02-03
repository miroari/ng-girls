import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TodoItem} from "../interfaces/todo-item";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() item!: TodoItem;
}
