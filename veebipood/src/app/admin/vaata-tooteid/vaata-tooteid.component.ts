import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaata-tooteid',
  templateUrl: './vaata-tooteid.component.html',
  styleUrls: ['./vaata-tooteid.component.css']
})
export class VaataTooteidComponent implements OnInit {
  tooted = [
    {nimi: "Coca cola", hind: 2, aktiivne: true}, 
    {nimi: "Fanta", hind: 2, aktiivne: false},
    {nimi: "Sprite", hind: 2, aktiivne: true},
    {nimi: "Vichy", hind: 1.5, aktiivne: true},
    {nimi: "Vitamin well", hind: 3, aktiivne: true}
    ];

  constructor() { }

  ngOnInit(): void {
    const tootedLS = localStorage.getItem("tooted");
    if (tootedLS !== null) {
      this.tooted = JSON.parse(tootedLS);
  }
}
  
  kustutaToode(toode: any) {

    const j2rjekorranumber = this.tooted.indexOf(toode);
    this.tooted.splice(j2rjekorranumber, 1); //kui numbrit ei pane, kustutab array l6puni  
    localStorage.setItem("tooted", JSON.stringify(this.tooted))
  }

}
