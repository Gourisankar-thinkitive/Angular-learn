import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
  constructor(private MyServiceService:MyServiceService, private http:HttpClient ) { }
  myvar:any = "";
  user:string="";
  ngOnInit(): void {
    this.user = this.MyServiceService.getData();
    // this.myvar = this.http.get("https://jsonplaceholder.typicode.com/users");

    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>{
      this.myvar = data;
    });
    console.log(this.myvar);

  }

  changeUser()
  {
    this.MyServiceService.setData(this.user);
  }


  canClick:boolean=false;
  sayMessage(){
    alert('hi');

  }


  get()
  {
    return window.location.href;
  }
}
