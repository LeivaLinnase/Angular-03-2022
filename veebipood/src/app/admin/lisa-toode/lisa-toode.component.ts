import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  lisa(vorm: any) {
    
    if (vorm.valid) {
    
    // console.log(vorm)
    // console.log(vorm.value);   {nimi: 'nimi', hind:: 123, aktiivne: true}
    // console.log(vorm.value.nimi);
    // console.log(vorm.value.hind);
    // console.log(vorm.value.aktiivne);
    // console.log(vorm.value.puuks);

    // let tooted = [];

    // let tootedLS = localStorage.getItem("tooted");
    // if (tootedLS !== null)  {
    //   tooted = JSON.parse(tootedLS);
    // }

    // tooted.push(vorm.value)
    // localStorage.setItem("tooted", JSON.stringify(tooted)) // JSON.stringify, sest sobib ainult string.
    this.http.post("https://riccardoveebipood-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
    vorm.value).subscribe();
    } // if-i l6pp
  }   // funktsiooni l6pp
 
}     //classi l6pp
