import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
event_name:any
event_date:any
currentuser:boolean | undefined 
eventname:any
eventdate:any
userid:any
priority:any
array2:any

eventsArray:any
  constructor(private http:HttpClient,private rout:Router) {
     const userID = JSON.parse(localStorage.getItem('id')||'');
     this.http.get('http://localhost:3004/addevent/'+userID).subscribe((result:any)=>{
      if(result){
        console.log("ess",result)
        this.eventsArray=result;

      }
     });
   
   }

  ngOnInit(): void {
  }

  eventdelete(name:any,date:any){
    // var event_name=this.eventname;
    this.currentuser=true;
    const event_name=name;
    const event_date=date;
    this.http.get('http://localhost:3004/singleevent/'+event_name + '/' + event_date).subscribe((result:any)=>{
      if(result){
        
        console.log("pp",result)
        this.eventname=result.eventname;
        this.eventdate=result.eventdate;
        this.userid=result.userid
        this.priority=result.priority;
        

      }
    })
    

  }

  delete(){
    var event_name=this.eventname;
    var event_date=this.eventdate;
    var userId=this.userid
    var priority=this.priority;
      
    const newBody = {
      event_name,
      event_date,
      userId,
      priority
    }
    console.log("ll",newBody);

    return this.http.delete('http://localhost:3004/deleteEvent/'+ event_name + '/' + event_date).subscribe((result:any)=>{
      if(result){
        
        alert(result.message);
       

         this.http.post('http://localhost:3004/deletedevent',newBody).subscribe((result:any)=>{
          if(result){
            console.log("g",result)
            this.rout.navigateByUrl('deleted-events')
          }

         })
      
      }
    })
  }
  canceldiv(){
    this.currentuser=false;
  }

  

}
