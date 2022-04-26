import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { AddProductComponent } from '../admin/add-product/add-product.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  totalPrice = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const cartItemsSS = sessionStorage.getItem("cartItems");
    if (cartItemsSS) {
      this.cartProducts = JSON.parse(cartItemsSS);
    }
    this.calculateTotal();

  }

  emptyCart() {
    this.cartProducts = [];
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts))
    this.calculateTotal();

  }
    

   calculateTotal() {
     this.totalPrice = 0; 
     
     console.log
     let totalPrice = this.cartProducts.forEach
     (element => this.totalPrice = this.totalPrice + element.product.price * element.quantity);
    
    
     
   
  }


  onDecreaseQuantity(cartProduct: any) {
    cartProduct.quantity--;
    if (cartProduct.quantity <= 0) {
      this.onRemoveProduct(cartProduct);
    }
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts))
    this.calculateTotal();

  }

  onIncreaseQuantity(cartProduct: any) {
    cartProduct.quantity++;
  
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts))
    this.calculateTotal();

  }

  onRemoveProduct(cartProduct: any) {
    const index = this.cartProducts.findIndex(element => element.product.id === cartProduct.product.id);
    if (index >= 0) {
    this.cartProducts.splice(index,1);
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts));
    this.calculateTotal();
   }
  }

  pay() {
    const makseAndmed = { 
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": this.totalPrice,
      "order_reference": Math.random() * 893847,
      "nonce": "a9b7f7e79" + new Date() + Math.random() * 893847,
      "timestamp": new Date(),
      "customer_url": "https://riccardwebshop.web.app/"
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
}
