import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategoryComponent } from './admin/category/category.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { ViewProductComponent } from './admin/view-product/view-product.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopsSettingsComponent } from './admin/shops-settings/shops-settings.component';
import { CarouselPicsComponent } from './admin/carousel-pics/carousel-pics.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "ostukorv", component: CartComponent},
  { path: "poed", component: ShopsComponent},
  { path: "admin", component: AdminHomeComponent},
  { path: "admin/lisa", component: AddProductComponent},
  { path: "admin/muuda/:productId", component: EditProductComponent},
  { path: "admin/halda", component: ViewProductComponent},
  { path: "admin/kategooriad", component: CategoryComponent},
  { path: "admin/poodide-seaded", component: ShopsSettingsComponent },
  { path: "admin/carousel-pics", component: CarouselPicsComponent },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
