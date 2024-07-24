import { Component, OnInit } from '@angular/core';
import { todo } from '../../todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  localItem:string | any;
  todos:todo[];
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[];
    }else{
      this.todos=JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {
  }
  deleteTodo(todo:todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo:todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
