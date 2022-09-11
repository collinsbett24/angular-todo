import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  AllTodos: Array<Todo> = [];

  constructor() { }

  addTodo(todos: any) {
    this.AllTodos.push.apply(todos);
    console.log(this.AllTodos);
  }

  getAllTodos() {
    return this.AllTodos;
  }

  DeleteAll() {
    this.AllTodos.length = 0;
    return this.AllTodos;
  }

  DeleteTodo(id: string) {
    console.log(id);
    var index = this.AllTodos.findIndex((t: any) => { t.name == id });
    console.log(index);
    if (index = -1) {
      this.AllTodos.splice(index, 1);
    }
  }

  likeListLength() {
    return this.AllTodos.length;
  }
}
