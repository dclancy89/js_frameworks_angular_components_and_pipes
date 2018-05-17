import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  time: Date;
  
  constructor() { }

  ngOnInit() {
    this.time = new Date();
  }

}
