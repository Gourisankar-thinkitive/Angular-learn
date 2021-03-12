import { Component, OnInit } from '@angular/core';
import { WebdataService } from './webdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Day16Feb';
  getdata:any="";

  constructor(private webservice: WebdataService)
  {}

  ngOnInit()
  {
    this.webservice.getMyData().subscribe((data)=>
    {
      this.getdata = data;
    })
  }

  response:any="";

  postMethod()
  {
    this.response = this.webservice.postMyData();
  }

  truncates()
  {
    this.webservice.truncate().subscribe();
  }

  

}
