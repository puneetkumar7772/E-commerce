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
import { AllsellerlistComponent } from 'src/app/admin/allsellerlist/allsellerlist.component';
import { SingleproductDetailsComponent } from 'src/app/pages/singleproduct-details/singleproduct-details.component';
import { AdminloginComponent } from 'src/app/admin/adminlogin/adminlogin.component';

const routes: Routes = [
  {
    path: 'sellerhome',
    component:SellerhomeComponent
  },
  {
    path: 'register',
    component:SellerregisterComponent
  },
  {
    path: 'login',
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
    path: 'sellerhome/singleproduct/:id',
    component:SingleproductDetailsComponent
  },
  {
    path: 'seller/sellerhome/adminhome',
    component:AdminhomeComponent
  },
  {
    path: 'admin/userlist',
    component:AlluserslistComponent
  },
  {
    path: 'admin/sellerlist',
    component:AllsellerlistComponent
  },
  {
    path: 'admin/adminlogin',
    component:AdminloginComponent
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
