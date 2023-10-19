import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { MobilesComponent } from 'src/app/pages/mobiles/mobiles.component';
import { LaptopsComponent } from 'src/app/pages/laptops/laptops.component';
import { MensclothesComponent } from 'src/app/pages/mensclothes/mensclothes.component';
import { MensfootwearComponent } from 'src/app/pages/mensfootwear/mensfootwear.component';
import { KidsclothesComponent } from 'src/app/pages/kidsclothes/kidsclothes.component';
import { KidsfootwearComponent } from 'src/app/pages/kidsfootwear/kidsfootwear.component';
import { WomenfootwearComponent } from 'src/app/pages/womenfootwear/womenfootwear.component';
import { WomenclothesComponent } from 'src/app/pages/womenclothes/womenclothes.component';
import { KitchenstoreComponent } from 'src/app/pages/kitchenstore/kitchenstore.component';
import { LedComponent } from 'src/app/pages/led/led.component';
import { RoomfurnitureComponent } from 'src/app/pages/roomfurniture/roomfurniture.component';
import { BeautyproductComponent } from 'src/app/pages/beautyproduct/beautyproduct.component';
import { SportsComponent } from 'src/app/pages/sports/sports.component';
import { SportskitComponent } from 'src/app/pages/sportskit/sportskit.component';
import { AllbooksComponent } from 'src/app/pages/allbooks/allbooks.component';



const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'user/login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'mobiles',
    component:MobilesComponent
  },
  {
    path: 'laptops',
    component:LaptopsComponent
  },
  {
    path: 'menClothes',
    component:MensclothesComponent
  },
  {
    path: 'menFootwear',
    component:MensfootwearComponent
  },
  {
    path: 'groceries',
    component:KidsclothesComponent
  },
  {
    path: 'kidsFootwear',
    component:KidsfootwearComponent
  },
  {
    path: 'womenFootwear',
    component:WomenfootwearComponent
  },
  {
    path: 'womenClothes',
    component:WomenclothesComponent
  },
  {
    path: 'kitchenStore',
    component:KitchenstoreComponent
  },
  {
    path: 'Led',
    component:LedComponent
  },
  {
    path: 'roomFurniture',
    component:RoomfurnitureComponent
  },
  {
    path: 'beautyProduct',
    component:BeautyproductComponent
  },
  {
    path: 'womenWatches',
    component:SportskitComponent
  },
  {
    path: 'menWatches',
    component:SportsComponent
  },
  {
    path: 'allbooks',
    component:AllbooksComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ]
})
export class UsermoduleModule { }
