import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  ostukorviTooted: any [] = [];
  koguSumma = 0;

  // string = "s6naline muutuja";
  // number = 22; //numbriline muutuja - saan teha arvutusi
  // boolean = true; //kahendv22rtus, ainult kas "true v6i "false

  constructor() {
    console.log("pannakse constructor k2ima");
   }
  
  ngOnInit(): void {
    console.log("pannakse ngOnInit k2ima");

    const ostukorvSS = sessionStorage.getItem("ostukorviTooted");
    if (ostukorvSS !== null) {
      this.ostukorviTooted = JSON.parse(ostukorvSS);
      
   
   }
   this.arvutaKogusumma()
  }

  kustutaToode(toode: any) {
     //js delete element from array  stackoverflow
     //  codegrepper.com
     // find index with .indexOf     mozilla indexof
     // remove with .splice()        mozilla splice
     const j2rjekorraNumber = this.ostukorviTooted.indexOf(toode);
     this.ostukorviTooted.splice(j2rjekorraNumber,1);
     sessionStorage.setItem("ostukorviTooted", JSON.stringify(this.ostukorviTooted))
     this.arvutaKogusumma()
     
     // `EI OLE SELLIST ASJA NAGU  .remove() v6i .delete()
  }

  lisaToode(toode: any) {
    console.log(toode)
  this.ostukorviTooted.push(toode);
  sessionStorage.setItem("ostukorviTooted", JSON.stringify(this.ostukorviTooted))
  this.arvutaKogusumma()
  }

  tyhjendaTooted() {
    this.ostukorviTooted = [];
    sessionStorage.setItem("ostukorviTooted", JSON.stringify(this.ostukorviTooted))
    this.arvutaKogusumma(); // funktsioone saan ka kasutusele v6tta this. abil
  }

  private arvutaKogusumma() {
    this.koguSumma = 0;
    this.ostukorviTooted.forEach(jumalaSavi => this.koguSumma = this.koguSumma + jumalaSavi.hind);
    // tsykli(loop) - v6tta k6igi toodete kyljest hind ja liida see koguSummale juurde
    // private = ei kasuta HTML-is. Kui vaja, eemalda private
  }



    //SALVESTAMINE:
    // 1. Andmebaas
    // 2. Brauseri m2lu
    // 3. Faili kirjutamine

  
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
