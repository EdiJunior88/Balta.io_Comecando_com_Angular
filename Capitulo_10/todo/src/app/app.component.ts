import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public title = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Passear com o cachorro', false));
    this.todos.push(new Todo(2, 'ir ao supermercado', false));
    this.todos.push(new Todo(3, 'cortar o cabelo', true));
  }
}
