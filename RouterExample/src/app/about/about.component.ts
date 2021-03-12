import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private MyServiceService:MyServiceService) { }

  user:string="";
  ngOnInit(): void {
    this.user = this.MyServiceService.getData();

  }

}
