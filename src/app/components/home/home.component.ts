import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from 'src/app/models/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() added = false;

  TodoList: Todo[] = [];
  constructor(public dialog: MatDialog, private _service: TodoServiceService) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddTodoComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getTodos();
    });
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.TodoList = this._service.getAllTodos();
  }

}
