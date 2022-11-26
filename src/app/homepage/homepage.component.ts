import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  userid:any;
  ename:any;
  edate:any;
  priority:any;
  currentUser:boolean | undefined;


  constructor(private rout:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  addEvent(){
    this.currentUser = true;
    this.userid=JSON.parse(localStorage.getItem('id')||'');
  }

  cancel(){
    this.currentUser = false;
  }

  create(){
   
    var event_name=this.ename;
    var event_date=this.edate;
    var priority=this.priority;
    var userid=JSON.parse(localStorage.getItem('id')||'');
    

    const newEvent = {
      userid,
      event_name,
      event_date,
      priority
    };
    return this.http.post('http://localhost:3004/addevent',newEvent).subscribe((result:any)=>{
      if (result){
        alert(result.message);
        this.rout.navigateByUrl('addevent')
      }
    })
  }



}
