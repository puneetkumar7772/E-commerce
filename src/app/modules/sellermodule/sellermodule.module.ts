import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SellerregisterComponent } from 'src/app/sellerpages/sellerregister/sellerregister.component';
import { SellerhomeComponent } from 'src/app/sellerpages/sellerhome/sellerhome.component';
import { AddproductComponent } from 'src/app/sellerpages/addproduct/addproduct.component';
import { ProductlistComponent } from 'src/app/sellerpages/productlist/productlist.component';
import { SellerloginComponent } from 'src/app/sellerpages/sellerlogin/sellerlogin.component';
import { AdminhomeComponent } from 'src/app/admin/adminhome/adminhome.component';
import { AlluserslistComponent } from 'src/app/admin/alluserslist/alluserslist.component';

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
    component:SellerloginComponent
  },
  {
    path: 'sellerhome/addproduct',
    component:AddproductComponent
  },
  {
    path: 'sellerhome/sellerproduct',
    component:ProductlistComponent
  },
  {
    path: 'sellerhome/adminhome',
    component:AdminhomeComponent
  },
  {
    path: 'admin/userlist',
    component:AlluserslistComponent
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
