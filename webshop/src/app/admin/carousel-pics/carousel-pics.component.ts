import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-carousel-pics',
  templateUrl: './carousel-pics.component.html',
  styleUrls: ['./carousel-pics.component.css']
})
export class CarouselPicsComponent implements OnInit {
  dbUrl = "https://riccardowebshop-default-rtdb.europe-west1.firebasedatabase.app/images.json"
  images: {url: string, header: string, text: string, alt: string}[] = [];
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{url: string, header: string, text: string, alt: string}[]>(this.dbUrl).subscribe(imagesFormDb => {
      const newArray = [];
      for (const key in imagesFormDb) {
        newArray.push(imagesFormDb[key]);
      }
      this.images = newArray;
    }) ;
  }
  onSubmit(addImageForm: NgForm) {
    this.http.post(this.dbUrl,addImageForm.value).subscribe(() => {
      this.images.push(addImageForm.value);
          });
          addImageForm.reset();
  }

  deleteImage(image: {url: string, header: string, text: string, alt: string}) {
    const index = this.images.findIndex(element => element.url === image.url);
    this.images.splice(index,1);
    this.http.put(this.dbUrl,this.images).subscribe();
  }
}
