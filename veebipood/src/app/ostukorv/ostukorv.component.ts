import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private http: HttpClient) {
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

  maksma() {
    const makseAndmed = { 
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": this.koguSumma,
      "order_reference": Math.random() * 893847,
      "nonce": "a9b7f7e79" + new Date() + Math.random() * 893847,
      "timestamp": new Date(),
      "customer_url": "https://riccardoveebipood1.web.app/"
     }
     
     const headers = {
      headers: new HttpHeaders(
        {
          "Authorization": 
          "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
        }
      )
    };
     this.http.post<any>("https://igw-demo.every-pay.com/api/v4/payments/oneoff", 
     makseAndmed, 
     headers).subscribe(tagastus => location.href = tagastus.payment_link);
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
