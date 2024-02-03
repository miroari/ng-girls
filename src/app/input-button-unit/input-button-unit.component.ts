import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule, AppComponent],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss'
})
export class InputButtonUnitComponent {
  title = 'Learn about components';
}
