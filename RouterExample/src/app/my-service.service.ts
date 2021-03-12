import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  mydata:string = "DEFAULT";
  constructor() { }

  getData()
  {
    return this.mydata;
  }

  setData(mydata:string)
  {
    this.mydata = mydata;
  }
}
