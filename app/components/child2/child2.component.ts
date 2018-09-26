import { Component, OnInit,Output,Input} from '@angular/core';
import {EventEmitter} from '@angular/core'

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {


  @Input() work;
  @Input() todolist;
  @Output() dolist=[];
  deleteTodo(index,done){
    if(done){
      this.todolist.splice(index,1);
    }else{
      this.dolist.splice(index,1);
    }
  }
  changeTodo(index,done){
    if(done){
      var Todo=this.todolist[index];
      this.dolist.push(Todo);
      this.todolist.splice(index,1);
    }else{
      var Done=this.dolist[index];
      this.todolist.push(Done);
      this.dolist.splice(index,1);
    }
  }
  constructor() { }
  ngOnInit() {
  }

}