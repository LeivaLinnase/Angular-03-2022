import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {
  toode: any;
  muutmiseVorm: any;

  constructor() { }
   //location.href === http://localhost:4200/admin/muuda/suur-6lts
   //location.href.split(muuda/"") === http://localhost:4200/admin/ [suur-6lts]
   //location.href === http://localhost:4200/admin/muuda/suur-6lts
  ngOnInit(): void {
    const toodeNimi = location.href.split("muuda")[1];
    const tootedLS = localStorage.getItem("tooted");
    if (tootedLS) { //tootedLS !== null     kontrollime, et tooted on olemas localStorage
      const tooted: any[] = JSON.parse(tootedLS); // v6tame localStoragest saadud jutum2rgid 2ra
      this.toode = tooted.find(element =>
         element.nimi
         .replaceAll(' ', '-')
         .toLowerCase()
         .replaceAll('6', 'o') === toodeNimi);
         
      this.muutmiseVorm = new FormGroup({    // luuakse vorm .ts sees, seega new FormGroup
         nimi: new FormControl(this.toode.nimi),            // vasaku poole kooloni ees oleva v6tmega panen HTMLi
         hind: new FormControl(this.toode.hind),            // paremal pool tehakse vormi inputi kontroll (ligip22s) valmis mida on v6imalik lugeda/muuta
         aktiivne: new FormControl(this.toode.aktiivne),

      });
      // p2rast vormi loomist minnakse HTMLi ja vorm pannakse seal:     [formGroup]="muutmiseVorm"
    }
  }
  muudaToode() {

  }

}
