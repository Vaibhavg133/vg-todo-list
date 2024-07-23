import { Component, OnInit } from '@angular/core';
import { todo } from '../../todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todos:todo[];
  constructor(){
    this.todos=[{
      sno:1,
      title:"Title 1",
      description:"one",
      active:true
    },
    {
      sno:2,
      title:"Title 1",
      description:"one",
      active:true
    },
    {
      sno:3,
      title:"Title 1",
      description:"one",
      active:true
    }]
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
