import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  



 constructor() { }

  ngOnInit() {
}
title:string = 'angular';
  /* fun(e){
    this.title="hello angular";
    if(e.keyCode==13){
      this.arr.push(this.txt);
    }
    
  }
  txt:number;
  arr:number[] = [1,2,3,4,5];
  del(idx:number){
    this.arr.splice(idx,1);
  } */
  /* txt:string;
  arr:string[]=[];
  arr1:string[]=[];
  getValue(e){
    if(e.keyCode==13){
      this.arr.push(this.txt);
      console.log(this.arr);
      this.txt='';
    }
  }
  delete(idx){
    this.arr.splice(idx,1);
  }
  change(idx){
    let ele=this.arr.splice(idx,1);
    this.arr1.push(ele[0]);
  delete1(idx){
    this.arr1.splice(idx,1);
  change1(idx){
    let ele1=this.arr1.splice(idx,1);
    this.arr.push(ele1[0]);
  }
  }
  } */

  txt:string;
  arr:Msg[]=[];
  counter:number=0;
  getValue(e){
    if(e.keyCode==13){
      this.arr.push(new Msg(this.txt,false));
      this.txt='';
      this.count();
    }
  }
  count(){
     this.counter=0;
     this.arr.forEach((value,index)=>{
       if(value.done){
         this.counter++;
       }
     })
  }
  delete(idx){
    this.arr.splice(idx,1);
    this.count();
  }
  change(idx){
    this.arr[idx].done=!this.arr[idx].done;
    this.count();
  }
}


export class Msg{
  constructor(public title:string,public done:boolean){}

}

