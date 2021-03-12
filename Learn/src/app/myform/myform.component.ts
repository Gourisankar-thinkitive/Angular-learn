import { Component, OnInit } from '@angular/core';
import { WebdataService } from '../webdata.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  getformdata:any="";
  constructor(private webservice:WebdataService) { }

  ngOnInit(): void {
    this.webservice.getMyData().subscribe((data)=>
    {
      this.getformdata = data;
    })

  }

}
