import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebdataService {

  constructor(private http:HttpClient) { }

  id:number=100;
  getMyData()
  {
    return this.http.get("http://localhost:8080/all");
  }
  postMyData()
  { 
    var data='{"empid":' +this.id+1+',"ename":"abcd","salary":78000}'; 
    this.id = this.id+1;
    var url="http://localhost:8080/save"; 
    var myheader:any=new HttpHeaders({'Content-Type':'application/json','Accept':'*/*'}); 
    return this.http.post(url,data,{'headers':myheader}); 
  } 
  truncate()
  {
    
    console.log("Truncate");
    return this.http.get("http://localhost:8080/del");
  }

  // postMyData()
  // { 
    
  //   var data='{ "userId": 61, "id": 11, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}'; 
  //   var url="https://jsonplaceholder.typicode.com/users"; 
  //   var header:any=new HttpHeaders({'Content-Type':'application/json'}); 
  //   return this.http.post(url,data,header); 
  // }

}
