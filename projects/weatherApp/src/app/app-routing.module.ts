import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DeveloperComponent } from './pages/developer/developer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'blogs', component: BlogComponent},
  {path: 'developer', component: DeveloperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
