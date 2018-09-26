
import { Component, OnInit,Output,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit  {

  input;
  @Output() private childOuter = new EventEmitter();
  
  constructor() {}
  ngOnInit() {}
  commit(i){
    if(i.keyCode == 13){
     this.childOuter.emit(this.input);
   }
 }
}

