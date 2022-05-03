import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  products: any[] = [];
  dbUrl = "https://riccardowebshop-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  product: any;

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    // 1. p88rdun route muutuja abil ActivatedRoute klassi sisse
    // 2. Snapshot v6tab seisundi tolle hetke URL-ist
    // 3. paraMap v6tab k6ik v6ti-v22rtus paarid URL-ist (URL-is kooloniga)
    // 4. get() v6tab sulgude sees antud v6tme v22rtuse URL-ist
    const productId = this.route.snapshot.paramMap.get("productId"); // peab olema sama mis app-routingus
    console.log(productId);
    this.http.get<any>(this.dbUrl).subscribe(Response => {  
      for (const key in Response) {
        this.products.push(Response[key]);
      }
      console.log("siia j6uan subscribe t6ttu hiljem kuigi on yleval pool")
      console.log(this.products);
      // siin pean .find() tegema
      this.product = this.products.find(element => Number(element.id) === Number(productId))
    });
    // this.products.find()
    console.log("siia j6uan varem kuigi on allpool")
    console.log(this.products);
  

  }
  onSubmit() {
    this.router.navigateByUrl("admin/tooted")
  }
}
