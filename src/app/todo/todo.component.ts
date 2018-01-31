import { Injectable, Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import api_url from './api_url';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

@Injectable()
export class TodoComponent implements OnInit {


  constructor(private http: HttpClient) { }

  todos = []
  striked = ''

  onSubmitTodo($event, f: NgForm){
  	$event.preventDefault();

    //this.todos.push({id: this.todos.length + 1, message:f.value.todo})
    if(f.value.todo !== ""){
      this.http.post(`/api/create-todo`, {
        message: f.value.todo
      }).subscribe(
        res => {
          this.repopulateTodos(res)
          f.resetForm()
        },
        err => {
          console.log("Error occured");
        }
      );
    } else {
      alert("Please enter message")
    }
  }

  onDelete(todoId){
  	// this.todos.splice(this.todos.map((todo) => {
  	// 	return todo.id
  	// }).indexOf(todoId), 1);
    this.http.delete(`/api/delete-todo/${todoId}`).subscribe(res => this.repopulateTodos(res))
  }

  onStrikeThrough($event){
  	$event.target.style.textDecoration = 'line-through'
  }

  populateTodos(todos){  
    todos.forEach((todo) => {
      this.todos.push(todo)
    })
  }

  repopulateTodos(todos){
    this.todos = [];
    todos.forEach((todo) => {
      this.todos.push(todo)
    })
  }

  ngOnInit(): void {
    console.log(api_url)
    this.http.get(`/api/todos`).subscribe((res:Response) => this.populateTodos(res))
  }

}
