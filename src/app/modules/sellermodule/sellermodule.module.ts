import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SellerregisterComponent } from 'src/app/sellerpages/sellerregister/sellerregister.component';
import { LoginComponent } from 'src/app/sellerpages/login/login.component';
import { SellerhomeComponent } from 'src/app/sellerpages/sellerhome/sellerhome.component';
import { AddproductComponent } from 'src/app/sellerpages/addproduct/addproduct.component';
import { ProductlistComponent } from 'src/app/sellerpages/productlist/productlist.component';

const routes: Routes = [
  {
    path: 'sellerhome',
    component:SellerhomeComponent
  },
  {
    path: 'seller/register',
    component:SellerregisterComponent
  },
  {
    path: 'seller/login',
    component:LoginComponent
  },
  {
    path: 'seller/addproduct',
    component:AddproductComponent
  },
  {
    path: 'seller/sellerproduct',
    component:ProductlistComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  [RouterModule.forChild(routes)],
  ]
})
export class SellermoduleModule {

 }
