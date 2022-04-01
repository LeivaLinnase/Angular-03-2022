import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  ostukorviTooted = ["Coca cola", "Fanta", "Sprite", "Vichy", "Vitamin well", "Kali"];

  // string = "s6naline muutuja";
  // number = 22; //numbriline muutuja - saan teha arvutusi
  // boolean = true; //kahendv22rtus, ainult kas "true v6i "false

  constructor() {
    console.log("pannakse constructor k2ima");
   }
  
  ngOnInit(): void {
    console.log("pannakse ngOnInit k2ima");
  }

  kustutaToode(toode: any) {
     //js delete element from array  stackoverflow
     //  codegrepper.com
     // find index with .indexOf     mozilla indexof
     // remove with .splice()        mozilla splice
     const j2rjekorraNumber = this.ostukorviTooted.indexOf(toode);
     this.ostukorviTooted.splice(j2rjekorraNumber,1);
     
     // `EI OLE SELLIST ASJA NAGU  .remove() v6i .delete()
  }

  lisaToode(toode: any) {
    console.log(toode)
  this.ostukorviTooted.push(toode);
  
  }

  tyhjendaTooted() {
    this.ostukorviTooted = [];

    //SALVESTAMINE:
    // 1. Andmebaas
    // 2. Brauseri m2lu
    // 3. Faili kirjutamine

  }
  // muudaBoolean() {
  //   this.boolean = false;

  // }
  // korrutaKahega() {
  //   this.number = this.number * 2;
  // }

  // muudaBoolean2() {
  //   this.boolean = !this.boolean;
  // }
} 





   
// muutujad ja funktsioonid algavad v2ikese t2hega ning iga j2rgnev s6na on suure t2hega!
// funktsioon saab errori kui ei ole () ja {}
// funktsiooni nime j'rel olevad sulud() t2histavad millegi vastuv6tmist
// loogelised sulud{} t2histavad funktsiooni algust ja l6ppu
