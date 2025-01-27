import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { ViewTodosComponent } from './pages/view-todos/view-todos.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';
import { FormsModule } from '@angular/forms';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AddTodoComponent,
        ViewTodosComponent,
        UpdateTodoComponent,
        NavbarComponent,
        FooterComponent,
        TodoViewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        HttpClientModule,
        NgxUiLoaderModule,
        NgxUiLoaderRouterModule,
        NgxUiLoaderHttpModule
       ],
    providers: [],
    bootstrap: [AppComponent]
    
})
export class AppModule { }
