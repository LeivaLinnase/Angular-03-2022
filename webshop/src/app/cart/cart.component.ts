import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { AddProductComponent } from '../admin/add-product/add-product.component';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  totalPrice = 0;
  parcelMachines: any[] = [];
  selectedParcelMachine: any;

  constructor(private http: HttpClient,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.http.get<any[]>("https://www.omniva.ee/locations.json").subscribe(res => this.parcelMachines = res);

    const cartItemsSS = sessionStorage.getItem("cartItems");
    if (cartItemsSS) {
      this.cartProducts = JSON.parse(cartItemsSS);
    }
    this.calculateTotal();

    // JSON.parse ei pea tegema, sest ta tuleb juba stringina ja ta peabki olema string
    this.selectedParcelMachine = sessionStorage.getItem("parcelMachine");
    


    
    

  }

  emptyCart() {
    this.cartProducts = [];
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts))
    this.calculateTotal();
    this.productService.cartChanged.next(true);

  }
    

   calculateTotal() {
     this.totalPrice = 0; 
     
     console.log
     let totalPrice = this.cartProducts.forEach
     (element => this.totalPrice = this.totalPrice + element.product.price * element.quantity);
    
     this.productService.cartChanged.next(true);
     
   
  }


  onDecreaseQuantity(cartProduct: CartProduct) {
    cartProduct.quantity--;
    if (cartProduct.quantity <= 0) {
      this.onRemoveProduct(cartProduct);
    }
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts))
    this.calculateTotal();
    this.productService.cartChanged.next(true);

  }

  onIncreaseQuantity(cartProduct: CartProduct) {
    cartProduct.quantity++;
  
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts))
    this.calculateTotal();
    this.productService.cartChanged.next(true);

  }

  onRemoveProduct(cartProduct: CartProduct) {
    const index = this.cartProducts.findIndex(element => element.product.id === cartProduct.product.id);
    if (index >= 0) {
    this.cartProducts.splice(index,1);
    if (this.cartProducts.length === 1 && this.cartProducts[0].product.id === 11110000) {
      this.onUnselectParcelMachine();
    }
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts));
    this.calculateTotal();
   }
   this.productService.cartChanged.next(true);
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

  onParcelMachineSelected() {
    // JSON.stringify() ei pea panema, sest juba on stringi kujul
    //   "Elva postkontor"
sessionStorage.setItem("parcelMachine", this.selectedParcelMachine);
this.cartProducts.push({
product: {id: 11110000,name:"Pakiautomaadi tasu",price:3.5,imgSrc: "assets/paki.jpeg",category: "",description: "",isActive: true},
quantity: 1
});
sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts));
this.calclulateSumOfCart();
this.productService.cartChanged.next(true);
}

  onUnselectParcelMachine() {
    this.selectedParcelMachine = "";
    sessionStorage.removeItem("parcelMachine");
    this.onRemoveProduct({
      product: {id: 11110000,name:"Pakiautomaadi tasu",price:3.5,imgSrc: "assets/paki.jpeg",category: "",description: "",isActive: true},
      quantity: 1
      })
      this.productService.cartChanged.next(true);
  }

  calclulateSumOfCart() {

  }
}
