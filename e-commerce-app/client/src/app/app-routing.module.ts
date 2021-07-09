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
