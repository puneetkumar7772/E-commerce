import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SellerregisterComponent } from './sellerpages/sellerregister/sellerregister.component';
import { UsermoduleModule } from './modules/usermodule/usermodule.module';
import { SellermoduleModule } from './modules/sellermodule/sellermodule.module';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { MensclothesComponent } from './pages/mensclothes/mensclothes.component';
import { MensfootwearComponent } from './pages/mensfootwear/mensfootwear.component';
import { KidsclothesComponent } from './pages/kidsclothes/kidsclothes.component';
import { KidsfootwearComponent } from './pages/kidsfootwear/kidsfootwear.component';
import { WomenfootwearComponent } from './pages/womenfootwear/womenfootwear.component';
import { WomenclothesComponent } from './pages/womenclothes/womenclothes.component';
import { KitchenstoreComponent } from './pages/kitchenstore/kitchenstore.component';
import { LedComponent } from './pages/led/led.component';
import { RoomfurnitureComponent } from './pages/roomfurniture/roomfurniture.component';
import { BeautyproductComponent } from './pages/beautyproduct/beautyproduct.component';
import { SportsComponent } from './pages/sports/sports.component';
import { SportskitComponent } from './pages/sportskit/sportskit.component';
import { AllbooksComponent } from './pages/allbooks/allbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SellerregisterComponent,
    MobilesComponent,
    LaptopsComponent,
    MensclothesComponent,
    MensfootwearComponent,
    KidsclothesComponent,
    KidsfootwearComponent,
    WomenfootwearComponent,
    WomenclothesComponent,
    KitchenstoreComponent,
    LedComponent,
    RoomfurnitureComponent,
    BeautyproductComponent,
    SportsComponent,
    SportskitComponent,
    AllbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsermoduleModule,
    SellermoduleModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
