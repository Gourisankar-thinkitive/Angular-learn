import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FirstAngular';
  x:string[] = ['a','b','c'];
  islogin:boolean = true;
  // a:string = "hi";\
  date = new Date();
  arr:string[] = ['one','two','three','four','five','six','seven'];
  mytext:string = "";
  myclass = "myclass1";

  clickevent()
  {
    this.mytext = this.mytext.toUpperCase();
    if(this.myclass == "myclass1")
    {
      this.myclass = "myclass2";
    }
    else
    {
      this.myclass = "myclass1";
    }
      
  }

  
}

