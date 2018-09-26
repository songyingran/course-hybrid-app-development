import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() todolist=[];
  addToDo(name:string){
    var object={
      workname:name,
    }
    this.todolist.push(object);
  }
  constructor(){}
  ngOnInit() {
  }
 
 
}