import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Todo } from 'src/app/models/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {


  @Output() added = new EventEmitter<any>();

  listTodo: Todo[] = [];
  doneControl = new FormControl(false);

  todoNameFormControl = new FormControl('', [Validators.required]);
  name: string | null = '';
  done: boolean | null = false;
  // done:boolean = false;

  constructor(private _formBuilder: FormBuilder, private _todo_service: TodoServiceService) { }
  ngOnInit(): void {

  }

  addTodo(f: NgForm) {
    // console.log(this.todoNameFormControl.value, this.doneControl.value);
    this.name = this.todoNameFormControl.value
    this.done = this.doneControl.value
    var p = { name: this.name, done: this.done };

    this.listTodo.push.apply(p);

    this._todo_service.addTodo(p);

    this.added.emit(true);

  }

}
