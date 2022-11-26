import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataservService {

  constructor(private http:HttpClient) { }
  register(userid:any,email:any,pswd:any){
    const data = {
      userid,
      email,
      pswd
    
    }
    console.log("testt",data)
    return this.http.post('http://localhost:3004/register',data)

  }

  login(email:any,pswd:any){
    const datas = {
      email,
      pswd
    }
    return this.http.post('http://localhost:3004/login',datas)

  }


}


