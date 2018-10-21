import { Component, OnInit, Optional, Host } from '@angular/core';
import {CommonService} from '../../services/common.service';
import { ShareService } from '../../services/share.service';
@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
  providers:[CommonService,ShareService]
})
export class ParentsComponent implements OnInit {

data=[1,2,3,4,5,6];
data1=["a","b","c","d"];
  private readonly newProperty = this;

  constructor( @Optional() @Host() private share:ShareService, private local:CommonService) { }
  add(){
    this.share.add(100);
  }
  
  /*private local;
  constructor(private injector:Injector){
    this.local=this.injector.get(CommonService);
  } */
  // private local =new CommonService();
 del(i){
  console.log(i);
  this.data.splice(i,1);
  this.local.set('list',this.data);
}
ngOnInit() {
   if(localStorage.getItem('list')){
     const newLocal = this;
     /*  newLocal.data =localStorage.getItem('list').split(','); */
  }else{
      this.data=[1,2,3,4,5,6];
  } 
   
    // setTimeout(()=>{this.data=this.data;},3000);
    // setInterval(()=>{this.data.push(2)},1000);
     //this.local.set('name','liu');
  }


  private newMethod() {
    return this;
  }
} 
 