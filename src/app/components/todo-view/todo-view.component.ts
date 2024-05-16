import { Component, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo';
import { ApiService } from '../../services/api.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent {
  @Input() todo:Todo=new Todo();

  @Output() deleteEvent: EventEmitter<string>=new EventEmitter();
  constructor(private apiService: ApiService) { }
  deleteTodo(todoId:string){
    this.apiService.deleteTodo(todoId).subscribe({
      next: (data) => {
        this.deleteEvent.next(todoId);
        alert('todo deleted');
    },
  error: (error) => {
    console.log(error);
    alert('error in deleting todo');
  },
});
}
}
