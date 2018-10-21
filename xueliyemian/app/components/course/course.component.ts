import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId2:number;
  courses2;
  ngOnInit() {
    this.http.get('/api/courses2').subscribe((data)=>{
      this.courses2=data;
    })
     this.courseId2=this.router.snapshot.params['courseId2'];
   }
   go(){
     this.route.navigate(['/course',600]);
   }
  }
