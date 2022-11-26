import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleted-events',
  templateUrl: './deleted-events.component.html',
  styleUrls: ['./deleted-events.component.css']
})
export class DeletedEventsComponent implements OnInit {

  arrays:any;

  constructor(private rout:Router,private http:HttpClient) { }

  ngOnInit(): void {
    const userId = JSON.parse(localStorage.getItem('id')||'');
    console.log("o",userId)
    this.http.get('http://localhost:3004/deletedevents/'+userId).subscribe((result:any)=>{
      if(result){
        this.arrays=result.events;
        console.log("l",this.arrays)
      }

    });

  }

}
