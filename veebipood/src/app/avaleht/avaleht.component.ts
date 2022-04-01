import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {



// massiiv / list / array
          // 5 elementi
tooted = ["Coca cola", "Fanta", "Sprite", "Vichy", "Vitamin well"];



  constructor() { 
    console.log("pannakse constructor k2ima");
  }

  ngOnInit(): void {
    console.log("pannakse ngOnInit k2ima");
  }

}
