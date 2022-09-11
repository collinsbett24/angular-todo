import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  // define an array of to hold data
  todoData: Array<any> = [];
  // use form builder to get form data
  addTodoForm = this._formBuilder.group({
    todoNameFormControl: ['', Validators.required]
  });

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
  }

  get f() {
    // return the values of the controls
    return this.addTodoForm.controls;
  }

  addTodo() {
    // console.log(this.addTodoForm.value);
    var name1 = this.addTodoForm.get('todoNameFormControl')?.value;
    // var done1 = false;

    // define constant holding an object
    var array = { name: name1, done: false };

    // merge the xdata to the todo array
    this.todoData = [...this.todoData, array];

    // notifying the user
    Swal.fire('success', 'Todo Added Successfully', 'success');

  }
  doneControl(i: any, value: boolean) {
    const previousTodo = this.todoData[i];
    previousTodo.done = !value;
    this.todoData[i] = previousTodo;
  }

  deleteFunc(i: any) {
    this.todoData.splice(i, 1);
  }

  deleteAll() {
    this.todoData = [];
    Swal.fire('Success', 'All Todos deleted successfully', 'warning')
  }
}
