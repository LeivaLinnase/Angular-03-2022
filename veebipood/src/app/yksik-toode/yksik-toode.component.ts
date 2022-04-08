import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yksik-toode',
  templateUrl: './yksik-toode.component.html',
  styleUrls: ['./yksik-toode.component.css']
})
export class YksikToodeComponent implements OnInit {

  toode: any;

  constructor() { }

  ngOnInit(): void {

   const toodeNimi = location.href.split("toode/")[1];
   console.log(toodeNimi)

   const tootedLS = localStorage.getItem("tooted");
   console.log(tootedLS)
    if (tootedLS !== null) {
    const tooted: any[] = JSON.parse(tootedLS);
    console.log(tootedLS)

    this.toode = tooted.find(element =>
       element.nimi.replaceAll(' ', '-').toLowerCase() === toodeNimi);
       console.log(this.toode)
  }
}

}
