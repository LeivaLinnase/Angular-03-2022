import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.models';
import { CategoryService } from 'src/app/services/category.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  dbUrl = "https://riccardowebshop-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  categoriesDbUrl = "https://riccardowebshop-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  categories: {categoryName: string}[] = [];
  productId!: number;
  products: Product[] = [];
  idUnique = false;
  selectedFile!: File;
  

  constructor(private http: HttpClient,
    private productService: ProductService,
    private categoryService: CategoryService,
    private imageUploadService: ImageUploadService) { }

  // KUI LÄHEN LEHELE, vahetult enne HTMLi pannakse käima ngOnInit
  // LEHELE MINNES TAHAN NÄHA KÕIKI KATEGOORIAID
  ngOnInit(): void {
    this.categoryService.getCategoriesFromDb().subscribe(categoriesFromDb => {
      const newArray = [];
      for (const key in categoriesFromDb) {
        newArray.push(categoriesFromDb[key]);
      }
      this.categories = newArray;
    });
    this.productService.getProductsFromDb().subscribe(Response => {
      for (const key in Response) {
        this.products.push(Response[key]);
       
      }
    });
  }

  onCheckIdUniqueness() {
   
    
     const index = this.products.findIndex(element => element.id === this.productId);
     if (index >= 0) {
        console.log("Mitteunikaalne ID");
        this.idUnique = false;
     } else {
        console.log("Kellegil teisel ei ole");
        this.idUnique = true;
     }

     
      
  }

  handleFileInput(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  sendPictureToDb() {
    this.imageUploadService.uploadPicture(this.selectedFile);
  }

  // onSubmit(addProductForm: NgForm) {
  //   this.http.post(this.dbUrl, addProductForm.value).subscribe(); 
  //   // kommenteerin kuna,
  //   // kasutan service(product.service.ts)
  //   // this.productService.addProductDb(addProductForm.value)
  //   // addProductForm.reset();
  
    
  // }

  onSubmit(addProductForm: NgForm) {
    // this.http.post(this.dbUrl, addProductForm.value).subscribe();
    const url = this.imageUploadService.uploadedPictureUrl;

    const val = addProductForm.value;
    const newProduct = new Product(val.id,val.name, url, val.price, val.category,
      val.description, val.active);
    this.productService.addProductDb(newProduct).subscribe();
    addProductForm.reset();
  }


  
}