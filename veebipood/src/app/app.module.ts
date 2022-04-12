import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { AutodComponent } from './autod/autod.component';
import { LisaToodeComponent } from './admin/lisa-toode/lisa-toode.component';
import { MuudaToodeComponent } from './admin/muuda-toode/muuda-toode.component';
import { VaataTooteidComponent } from './admin/vaata-tooteid/vaata-tooteid.component';
import { AdminKoduComponent } from './admin/admin-kodu/admin-kodu.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';

@NgModule({
  declarations: [
    AppComponent,
    AvalehtComponent,
    OstukorvComponent,
    AutodComponent,
    LisaToodeComponent,
    MuudaToodeComponent,
    VaataTooteidComponent,
    AdminKoduComponent,
    YksikToodeComponent
    
  ],
  imports: [
    //HTML-i jaoks olevad impordid
    BrowserModule,  //saan kasutada *ngFor, *ngIf
    AppRoutingModule, // routerLink
    FormsModule, // ngForm
    HttpClientModule, // httpClient constructorisse
    ReactiveFormsModule, // [ngformGroup]=""
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
