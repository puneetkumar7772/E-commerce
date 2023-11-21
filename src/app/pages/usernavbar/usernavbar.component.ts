import { Component } from '@angular/core';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent {
  cartArray: any[] = [];
ngOnInit(){
  let cart = localStorage.getItem('cart');
  this.cartArray = cart ? JSON.parse(cart) : [];
  console.log("first",this.cartArray)
}
}
