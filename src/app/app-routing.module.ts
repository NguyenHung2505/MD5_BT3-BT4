import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [{
  path : 'hoo',
  component : HomeComponent
},
  {
    path: 'admin',
    component : AdminComponent
  },
  {
    path: 'admin',
    component : AdminComponent
  },
  {
    path: 'broduc',
    component : ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
