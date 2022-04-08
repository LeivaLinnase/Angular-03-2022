import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {



// massiiv / list / array
          // 5 elementi
tooted = [
{nimi: "Coca cola", hind: 2, aktiivne: true}, 
{nimi: "Fanta", hind: 2, aktiivne: false},
{nimi: "Sprite", hind: 2, aktiivne: true},
{nimi: "Vichy", hind: 1.5, aktiivne: true},
{nimi: "Vitamin well", hind: 3, aktiivne: true}
];



  constructor() { 
    console.log("pannakse constructor k2ima");
  }

  ngOnInit(): void {
    console.log("pannakse ngOnInit k2ima");

    const tootedLS = localStorage.getItem("tooted");
    if (tootedLS !== null) {
      this.tooted = JSON.parse(tootedLS);
    }
  }

lisaOstukorvi(toode: any) {
  const ostukorvSS = sessionStorage.getItem("ostukorviTooted");
  let ostukorv = [];
  if (ostukorvSS !== null) { //null = tyhjus  !== ei ole v6rdne

    ostukorv = JSON.parse(ostukorvSS);
    
  }
  ostukorv.push(toode);
  sessionStorage.setItem("ostukorviTooted", JSON.stringify(ostukorv));
}

// salvestamine:
// 1. andmebaas - makstud ostukorv, tellimused, kasutajad
// 2. brauserisse - ostukorvi sisu, veebilehe seaded(keel, v2rv)
// 3. faili

}
