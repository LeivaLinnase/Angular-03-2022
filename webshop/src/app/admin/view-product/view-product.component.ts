import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from 'src/app/models/cart-product.model';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  descriptionWordCount = 3;
  products: Product[] = [];
  originalProducts: Product[] = [];
  dbUrl = "https://riccardowebshop-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  searchedProduct: string = "";

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.http.get<any>(this.dbUrl).subscribe(Response => {  
      
      const newArray = [];
      for (const key in Response) {
        this.products.push(Response[key]);
        this.originalProducts.push(Response[key]);
      }
    });
  }

  onFilterProducts() {
    console.log(this.searchedProduct);
    this.products = this.originalProducts.filter(element =>
       element.name.toLocaleLowerCase().indexOf(this.searchedProduct.toLocaleLowerCase()) >= 0  ||
       element.description.toLowerCase().indexOf(this.searchedProduct.toLocaleLowerCase()) >= 0) 
  }

}
