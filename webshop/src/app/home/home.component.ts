import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { elementAt } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    "https://picsum.photos/id/944/900/300",
    "https://picsum.photos/id/1011/900/300",
    "https://picsum.photos/id/984/900/300"
    // "/assets/...."
  ];
  descriptionWordCount = 3;
  products: Product[] = [];
  dbUrl = "https://riccardowebshop-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  dbUrl2 = "https://riccardowebshop-default-rtdb.europe-west1.firebasedatabase.app/images.json";
  images2: any[] = [];
  // images2: {url: string, header: string, text: string, alt: string}[]
  // kuup2ev = new Date();
  // protsent = 0.5;
  // rahayhik = 1000000;
  // lause = "vitamin well without sugar";
  categories: string[] = [];
  selectedCategory = "";
  originalProducts: Product[] = [];
  loggedIn = false;
  searchedItem = "";


  constructor( 
    private http: HttpClient,
    private productService: ProductService,
    private authService: AuthService,
    private _toastService: ToastService) { }

  ngOnInit(): void {

    // this.http.get<{url: string, header: string, text: string, alt: string}[]>(this.dbUrl).subscribe(imagesFormDb => {
    //   const newArray = [];
    //   for (const key in imagesFormDb) {
    //     newArray.push(imagesFormDb[key]);
    //   }
      
   // pidin eelneva kommenteerima....lisaks eemaldasin private http: HttpClient

      
    // }) ;

    this.http.get<{url: string, header: string, text: string, alt: string}[]>(this.dbUrl2).subscribe(imagesFromDb => {
    // this.http.get<{imgName: string}[]>(this.dbUrl).subscribe(imagesFromDb => {
      const newArray = [];
      for (const key in imagesFromDb) {
        newArray.push(imagesFromDb[key]);
      }
      this.images2 = newArray;
      console.log(this.images2);
    });

    this.productService.getProductsFromDb().subscribe(Response => {
    // this.http.get<Product[]>(this.dbUrl).subscribe(Response => {    //.subscribe lubab edasi minna
      //  {-blabla: {1}, -lalala, {2}}      [{1},{2}]  ----> forin tsykkel (teeb objekti sees tsykli)
      // const toode = {nimi: "coca cola", hind: 3, kategooriga: "coca", aktiivne: true}
       // const newArray = [];
      // for (const key in toode)    1. nimi   2. hind   3. kategooria    4. aktiivne
      // toode[key]   1."coca cola"    2. 3   3."coca"    4. true
      // forin sees: newArray.push(toode[key])  ----> ["coca cola", 3, "coca, true"]
      
      const newArray = [];
      for (const key in Response) {
        this.products.push(Response[key]);
        this.originalProducts.push(Response[key]);
      }

      this.categories = this.products.map(element => element.category);
      this.categories = [...new Set(this.categories)];
    });
    
    this.authService.loggedInChanged.subscribe(loggedInFromSubject => {
      this.loggedIn = loggedInFromSubject;
    })
    
   
  }

  onFilterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === '') {
      this.products = this.originalProducts;
    } else {
      this.products = this.originalProducts.filter(element => element.category === category);
    }
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
      const parcelMachineIndex = cartItems.findIndex(element => element.product.id === 11110000);
      if(parcelMachineIndex >= 0) {
        cartItems.splice(parcelMachineIndex, 0,{product:productClicked, quantity: 1});

      } else {
        cartItems.push({ product: productClicked, quantity: 1 })
      }
      
    }
    // enne kui pushin otsi yles kas sellist toodet juba on ostukorvi esemete hulgas
    // sulgude seest tuleva eseme id ---> product.id
    // otsin kas seda on cartItems seas ---> .findIndex(element => element.id === product.id)
    // kui ON, siis teen yhte loogikat
    // kui EI OLE, siis teen teist loogikat
    // if()  index >= 0 ---> suurendan kogust
    // else index === -1 ---> lisan ostukorvi .push abil 
     sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
     this.productService.cartChanged.next(true);
     
     this._toastService.info(productClicked.name + ' lisati ostukorvi');
     // info - sinine
     // sucess - roheline
     //error - punane
     //....
   
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
//  onSearch() {

//     this.products.forEach((product, i) => {
//       let productDiv = document.getElementsByClassName("product")[i] as HTMLElement
//       if (product.name.toUpperCase().indexOf(this.searchedItem.toUpperCase()) > -1) {
//         productDiv.style.display = "";
//       } else {
//         productDiv.style.display = "none";
//       }
//     });
//  }   KODUT88 PROOVIFUNKTSIOON
}
