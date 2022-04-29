import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  descriptionWordCount = 3;
  products: Product[] = [];
  dbUrl = "https://riccardowebshop-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  
  // kuup2ev = new Date();
  // protsent = 0.5;
  // rahayhik = 1000000;
  // lause = "vitamin well without sugar";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<Product[]>(this.dbUrl).subscribe(Response => {    //.subscribe lubab edasi minna
      //  {-blabla: {1}, -lalala, {2}}      [{1},{2}]  ----> forin tsykkel (teeb objekti sees tsykli)
      // const toode = {nimi: "coca cola", hind: 3, kategooriga: "coca", aktiivne: true}
       // const newArray = [];
      // for (const key in toode)    1. nimi   2. hind   3. kategooria    4. aktiivne
      // toode[key]   1."coca cola"    2. 3   3."coca"    4. true
      // forin sees: newArray.push(toode[key])  ----> ["coca cola", 3, "coca, true"]
      
      const newArray = [];
      for (const key in Response) {
        this.products.push(Response[key]);
      }
    });
    
   
  }
  onAddToCart(productClicked: Product) {
    const cartItemsSS = sessionStorage.getItem("cartItems");
    let cartItems: CartProduct[] = [];
    if (cartItemsSS) {  //cartItemsSS !== null
      cartItems = JSON.parse(cartItemsSS);
    }
    const index = cartItems.findIndex(element => element.product.id === productClicked.id)
      if (index >= 0) {
      cartItems[index].quantity++;
      // ++  suurendan ennast 1 v6rra --> cartItems[index].quantity + 1
    }
    else {
      cartItems.push({ product: productClicked, quantity: 1 })
    }
    // enne kui pushin otsi yles kas sellist toodet juba on ostukorvi esemete hulgas
    // sulgude seest tuleva eseme id ---> product.id
    // otsin kas seda on cartItems seas ---> .findIndex(element => element.id === product.id)
    // kui ON, siis teen yhte loogikat
    // kui EI OLE, siis teen teist loogikat
    // if()  index >= 0 ---> suurendan kogust
    // else index === -1 ---> lisan ostukorvi .push abil 
     sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  onSortAZ() {
    this.products.sort((a,b) => a.name.localeCompare(b.name))
  }

  onSortZA() {
    this.products.sort((a,b) => b.name.localeCompare(a.name))
    
  }

  onSortPriceAsc() {
    this.products.sort((a, b) => (a.price - b.price) );
    
  }

  onSortPriceDesc() {
    this.products.sort((a, b) => -1*(a.price - b.price) );
      // v6ib ka lihtsalt b.price - a.price
  }
}
