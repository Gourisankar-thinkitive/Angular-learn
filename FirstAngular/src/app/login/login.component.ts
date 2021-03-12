import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msg:string="";
  uname:string = "";
  password:string = "";

  adminLog:boolean = false;

  mymethod(data:any)
  {
    alert(data.username+" "+data.password);
  }

}
