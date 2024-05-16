import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-update-todo',
 
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.css'
})
export class UpdateTodoComponent implements OnInit {
  todo = new Todo();
  constructor
(private apiService:ApiService, private activatedRoute: ActivatedRoute){

}ngOnInit(): void {
  const todoId=this.activatedRoute.snapshot.paramMap.get('todoId')
  console.log(todoId);
  this.apiService.getTodo(todoId||'').subscribe({
    next: (todo) =>{console.log(todo), this.todo = todo;},
  });
}

updateTodo(event:SubmitEvent){
  this.apiService.updateTodo(this.todo.id, this.todo).subscribe({
    next: (todo) => {alert("updated"), this.todo = todo;},
    error:(error)=>{
      console.log(error);
      alert('not updated');
    }
});
}
}