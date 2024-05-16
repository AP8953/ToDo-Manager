import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})
export class ViewTodosComponent implements OnInit {
  todos:Todo[]=[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTodos().subscribe({
      next: (data) => {
        console.log(data);
        this.todos = data;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }
  deleteEventFromChild(todoId: string){
    this.todos=this.todos.filter(todo=>todo.id!=todoId)
  }
}
