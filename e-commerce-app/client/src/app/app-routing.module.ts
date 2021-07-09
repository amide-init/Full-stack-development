import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent } from './pages/brands/brands.component';
import { ItemsComponent } from './pages/items/items.component';

const routes: Routes = [
  {path:'brands', component: BrandsComponent},
  {path:'items', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*
ng new client
cd client 
create brand componnet under pages folder
   ng g c pages/brands
same for items page

open app-routing.module.ts

import component and make your path

create a navbar component
ng g c components/navbar

add navbar in app.components ts
use routerlink in navbar


*/