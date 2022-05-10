import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-shops-settings',
  templateUrl: './shops-settings.component.html',
  styleUrls: ['./shops-settings.component.css']
})
export class ShopsSettingsComponent implements OnInit {
  
  dbUrl = "https://riccardowebshop-default-rtdb.europe-west1.firebasedatabase.app/shops.json"
  shops: {shopName: string, latitude: number, longitude: number, openTimes: string}[] = [];

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{shopName: string, 
    latitude: number,
    longitude: number, 
    openTimes: string}[]>(this.dbUrl).subscribe(shopsFromDb => {
      const newArray = [];
      for (const key in shopsFromDb) {
        newArray.push(shopsFromDb[key]);
      }
      this.shops = newArray;
    });
  
  }

  onSubmit(addShopForm: NgForm) {
    this.http.post(this.dbUrl, addShopForm.value).subscribe();
    this.shops.push(addShopForm.value);
    addShopForm.reset();
  }

  deleteShop(shop: {shopName: string}) {
    const index = this.shops.findIndex(element => element.shopName === shop.shopName);
    this.shops.splice(index,1);
    this.http.put(this.dbUrl,this.shops).subscribe();
  }

}
