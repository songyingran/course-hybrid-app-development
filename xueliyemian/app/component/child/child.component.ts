import { Component,EventEmitter,OnInit,Input,Output,SimpleChanges } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   index =0;
   message:string;
  //  arr;
  constructor(private share:ShareService) {
    this.log("constructor");
   }

  @Input() arr:Array<any>;
  @Input() arr1:Array<any>;
  @Output() delIndex:EventEmitter<number> = new EventEmitter<number>();
  del(i){
    this.delIndex.emit(i);
  }
  log(msg){
    console.log(`这是第${this.index++}次调用,调用的钩子函数是${msg}`);
  }
  
  ngOnInit() {
    this.log("ngOnInit");
    this.arr=this.share.data;
    //this.message='hello';
  }
  ngOnChanges(changes: SimpleChanges):void{
    // this.log("ngOnChanges");
    // console.log(changes);
    for(let item in changes){
      // console.log(changes[item].currentValue);
    for(let i in changes[item]){
      console.log(`属性名${i},属性值${changes[item][i]}`);
    }
  }
  }
  /* ngAfterContentChecked():void{
    this.log("ngAfterContentChecked");
  } */
  /* ngAfterContentInit():void{
    //setTimeout(()=>{
    this.message='hello';
      //},0);
    this.log("ngAfterContentInit");
  }
  ngAfterViewChecked():void{
    //this.message='hello';
    this.log("ngAfterViewChecked");

  }
  ngDoCheck():void{
    this.log("ngDoCheck");
  }
  ngAfterViewInit():void{
    this.log("ngAfterViewInit");
  } */
}
