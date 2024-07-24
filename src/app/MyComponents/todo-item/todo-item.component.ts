import { Component, EventEmitter, Input, OnInit, Output, NgModule } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
import { todo } from '../../todo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [TodosComponent,CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() myTodo: todo | any;
  @Input() i : number | undefined;
  @Output() todoDelete: EventEmitter<todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<todo> = new EventEmitter();
  constructor(){

  }
  ngOnInit(): void {
  }
  onClick(myTodo:todo){
    this.todoDelete.emit(myTodo);
    console.log("onClick has been triggered")
  }
  onCheckBoxClick(myTodo: todo){
    this.todoCheckBox.emit(myTodo);
    console.log("Check Box clicked");
  }
}
