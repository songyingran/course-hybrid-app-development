import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  essayId:number;
  shequ;
  ngOnInit() {
    /* console.log(this.router.snapshot.queryParams['id']); */
    this.http.get('/api/shequ').subscribe((data)=>{
      this.shequ=data;
    })
 
     this.essayId=this.router.snapshot.params['essayId'];
  }
  go(){
    this.route.navigate(['/shequ',600]);
  }
}

