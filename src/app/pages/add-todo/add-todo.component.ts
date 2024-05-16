import { Component } from '@angular/core';
import { Todo } from '../../model/todo';
import { log } from 'console';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-add-todo',
  
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  todo = new Todo();

  constructor(private apiService: ApiService){

  }
  submitForm(event: Event): void {
    const submitEvent = event as SubmitEvent;
    submitEvent.preventDefault();
    console.log(submitEvent);
    console.log(this.todo);
    this.apiService.addTodo(this.todo).subscribe({
      next: (data) => {
        console.log(data);
      alert('todo added');
    this.todo=new Todo();},
      error: (error) => {console.log(error);},
      complete: () => {console.log('request completed');},
    });
  }
  
}

