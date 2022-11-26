import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataservService } from '../service/dataserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;
  userid:any;

  constructor(private rout:Router,private move:DataservService,private http:HttpClient) { }

  ngOnInit(): void {
  }
  login(){
    var email=this.email;
    var pswd=this.password;
   
      this.move.login(email,pswd).subscribe((results:any)=>{
        if(results){
          console.log("p",results)
          this.userid=results.id
          localStorage.setItem('id',JSON.stringify(this.userid))
          console.log("cd",this.userid)
          alert(results.message)
          this.rout.navigateByUrl('homepage')
        }
      },(results)=>{
        alert(results.error.message)
      });
    
  }


}
