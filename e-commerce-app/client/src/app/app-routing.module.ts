import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent } from './pages/brands/brands.component';
import { ItemsComponent } from './pages/items/items.component';
import { BrandItemsComponent } from './pages/brand-items/brand-items.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from'./pages/profile/profile.component';
import { AuthGuard } from './guard/auth/auth.guard';
import { NotAuthGuard } from './guard/not-auth/not-auth.guard';
const routes: Routes = [
  {path:'brands', component: BrandsComponent, canActivate: [AuthGuard]},
  {path:'items', component: ItemsComponent, canActivate: [AuthGuard]},
  {path:'branditems/:brandId', component: BrandItemsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [NotAuthGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [NotAuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path:'**', component: BrandsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// rzp_test_XeXDZ1bfrkFjXG
// ICtqt29GIFRpvRBC0W80TEx5


