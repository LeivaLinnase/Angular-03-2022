import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autod',
  templateUrl: './autod.component.html',
  styleUrls: ['./autod.component.css']
})
export class AutodComponent implements OnInit {
  autod = ["bmw", "mercedes", "tesla", "audi", "opel", "volkswagen", "ford", "volvo"];

  constructor() { }

  ngOnInit(): void {
  }

lisa(auto: any) {
  console.log(auto);
  this.autod.push(auto);
}

tyhjenda() {

  this.autod = ["bmw", "mercedes", "tesla", "audi", "opel", "volkswagen", "ford", "volvo"];

}

kustuta(auto: any) {
//js delete element from array  stackoverflow
     //  codegrepper.com
     // find index with .indexOf     mozilla indexof
     // remove with .splice()        mozilla splice
     const j2rjekorraNumber = this.autod.indexOf(auto);
     this.autod.splice(j2rjekorraNumber,1);

}

hasDuplicates(autod: any) {
  var valuesSoFar = Object.create(null);
  for (var i = 0; i < autod.length; ++i) {
      var value = autod[i];
      if (value in valuesSoFar) {
          return true;
      }
      valuesSoFar[value] = true;
  }
  return false;
}

}
