import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaata-tooteid',
  templateUrl: './vaata-tooteid.component.html',
  styleUrls: ['./vaata-tooteid.component.css']
})
export class VaataTooteidComponent implements OnInit {
  tooted: any =  [
    // {nimi: "Coca cola", hind: 2, aktiivne: true},        LocalStorage variant. Pean kasutama any tyhja massiivi
    // {nimi: "Fanta", hind: 2, aktiivne: false},            ees .
    // {nimi: "Sprite", hind: 2, aktiivne: true},
    // {nimi: "Vichy", hind: 1.5, aktiivne: true},
    // {nimi: "Vitamin well", hind: 3, aktiivne: true}
    ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  //   const tootedLS = localStorage.getItem("tooted");   LocalStorage variant
  //   if (tootedLS !== null) {
  //     this.tooted = JSON.parse(tootedLS);
  // }
  this.http.get<any>("https://riccardoveebipood-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
  .subscribe(tootedFB => {
   this.tooted = tootedFB
   const uusMassiiv = [];
   for (const key in tootedFB) {
     uusMassiiv.push(tootedFB[key]);
   }
   this.tooted = uusMassiiv;
   })

}
  
  kustutaToode(toode: any) {

    const j2rjekorranumber = this.tooted.indexOf(toode);
    this.tooted.splice(j2rjekorranumber, 1); //kui numbrit ei pane, kustutab array l6puni  
    //  
    this.http.put("https://riccardoveebipood-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
    this.tooted).subscribe();
  }

}
