import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component'
import { SellerregisterComponent } from 'src/app/sellerpages/sellerregister/sellerregister.component';
import { LoginComponent } from 'src/app/sellerpages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'seller/register',
    component:SellerregisterComponent
  },
  {
    path: 'seller/login',
    component:LoginComponent
  }
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
