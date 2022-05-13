import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  dbUrl = "https://riccardowebshop-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  cartChanged = new BehaviorSubject(true);
  constructor(private http: HttpClient) { }

  getProductsFromDb() {
  return this.http.get<Product[]>(this.dbUrl);
  }

  addProductDb(newProduct: Product) {
    return this.http.post(this.dbUrl, newProduct);
  }
  updateProductsInDb(updatedProducts: Product[]) {
    return this.http.put(this.dbUrl, this.updateProductsInDb)
  }
}
