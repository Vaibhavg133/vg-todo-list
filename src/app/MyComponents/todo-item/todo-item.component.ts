import { Component, Input, OnInit } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
import { todo } from '../../todo';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [TodosComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() myTodo: todo | any;
  constructor(){

  }
  ngOnInit(): void {
  }

}
