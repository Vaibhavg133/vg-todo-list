import { Component, OnInit } from '@angular/core';
import { todo } from '../../todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent,TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todos:todo[];
  constructor(){
    this.todos=[{
      sno:1,
      title:"Title 1",
      description:"Description 1",
      active:true
    },
    {
      sno:2,
      title:"Title 2",
      description:"Description 2",
      active:true
    },
    {
      sno:3,
      title:"Title 3",
      description:"Description 3",
      active:true
    }]
  }
  ngOnInit(): void {
  }
  deleteTodo(todo:todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
}
