import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { ViewTodosComponent } from './pages/view-todos/view-todos.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full',
  },
  {
    path:'home',
    component:HomeComponent,
    title:'Home-Todo Manager'
  },
  {
    path:'add-todo',
    component:AddTodoComponent,
    title:'Add Todo-Todo Manager'
  },
  {
    path:'view-todos',
    component:ViewTodosComponent,
    title:'View Todos-Todo Manager'
  },
  {
    path:'update-todo/:todoId',
    component:UpdateTodoComponent,
    title:'Update-Todo Manager'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
