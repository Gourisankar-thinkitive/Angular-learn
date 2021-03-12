import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private MyServiceService:MyServiceService) { }

  user:string="";
  ngOnInit(): void {
    this.user = this.MyServiceService.getData();

  }
}
