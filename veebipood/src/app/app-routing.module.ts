import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { AutodComponent } from './autod/autod.component';

const routes: Routes = [
{ path: "avaleht", component: AvalehtComponent},
{ path: "ostukorv", component: OstukorvComponent},
{ path: "autod", component: AutodComponent},
];
 


 
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
