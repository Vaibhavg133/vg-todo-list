import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() todoDelete: EventEmitter<todo> = new EventEmitter();
  constructor(){

  }
  ngOnInit(): void {
  }
  onClick(myTodo:todo){
    this.todoDelete.emit(myTodo);
    console.log("onClick has been triggered")
  }
}
