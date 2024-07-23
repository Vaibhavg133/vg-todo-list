import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { todo } from '../../todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{
description: string | undefined
title: string | undefined;
@Output() todoAdd: EventEmitter<todo> = new EventEmitter();
ngOnInit():void{

}
onSubmit(){
  console.log("Add New ToDo Triggered");
  const newTodo = {
    sno:8,
    title:this.title,
    description:this.description,
    active:true
  }
  this.todoAdd.emit(newTodo);
}
}
