import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 
export class LogService {
  log(key){
    console.log("get方法调用了");
  }
  constructor() { }
}
