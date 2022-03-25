import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {

  constructor() { 
    console.log("pannakse constructor k2ima");
  }

  ngOnInit(): void {
    console.log("pannakse ngOnInit k2ima");
  }

}
