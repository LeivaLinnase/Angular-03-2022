import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ViewProductComponent } from './admin/view-product/view-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 



// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ThousandSeparatorPipe } from './pipes/thousand-separator.pipe';
import { DescriptionShortenerPipe } from './pipes/description-shortener.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopsComponent } from './shops/shops.component';
import { CategoryComponent } from './admin/category/category.component';
import { ShopsSettingsComponent } from './admin/shops-settings/shops-settings.component';
import { CarouselPicsComponent } from './admin/carousel-pics/carousel-pics.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AdminHomeComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductComponent,
    NavbarComponent,
    ThousandSeparatorPipe,
    DescriptionShortenerPipe,
    ShopsComponent,
    CategoryComponent,
    ShopsSettingsComponent,
    CarouselPicsComponent,
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularToastifyModule,
    BrowserModule,
        // ngx-translate and the loader module
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
      
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
