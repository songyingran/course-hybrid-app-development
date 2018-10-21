import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  // timer=null;
  course;
  headers = new HttpHeaders({});
  ngOnInit() {
    //setInterval(function(){
      //console.log(11);
    //},1000)
    /* this.http.get('/api/courses/3').subscribe((data)=>{
      console.log(data);
    }) */
     this.http.post('/api',{name:'liuguanjun',pwd:123456},{headers:this.headers}).subscribe((data)=>{
       console.log(data);
    } )
  }
  ngOnDestroy() {
  //  clearInterval(this.timer);
    
  }
}
