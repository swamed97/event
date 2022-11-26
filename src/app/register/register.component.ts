import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataservService } from '../service/dataserv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm=this.fb.group({
  userid:['',[Validators.required]],
  email:['',[Validators.required]],
  password:['',[Validators.required]],


})
  constructor(private fb:FormBuilder,private rout:Router,private http:HttpClient,private chall:DataservService) { }

  ngOnInit(): void {
  }
  register(){
    var userid:any=this.registerForm.value.userid
    var email:any=this.registerForm.value.email
    var pswd:any=this.registerForm.value.password
    
    console.log("chhh",this.registerForm)
    if(this.registerForm.valid){
      this.chall.register(userid,email,pswd).subscribe((result:any)=>{
        console.log("fin",result)
        if(result){
          
          alert(result.message)
          this.rout.navigateByUrl('')
        }
      },(result)=>{
        alert(result.error.message)
      });

      
    }else{
      alert('please give right input')
    }
  }
  

}
