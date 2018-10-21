import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ParentsComponent } from './component/parents/parents.component';
import { ChildComponent } from './component/child/child.component';
import {CommonService} from './services/common.service';
import {Common2Service} from './services/common2.service';
import {RouterModule,Router}  from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component'
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentsComponent,
    ChildComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbudetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
  
      {path:'home',component:HomeComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'tongbu',component:TongbuComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:ShequComponent},
    ]),
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
  {provide:CommonService,useClass:Common2Service}
],
  bootstrap: [AppComponent]
})
export class AppModule {}
