import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Greeting: any;
  constructor() { }

  ngOnInit() {
    const timeZone = new Date().getHours();
    if(timeZone <12)
      this.Greeting = "Good Morning";
    else
      this.Greeting = "Good Afternoon";
  }

}
