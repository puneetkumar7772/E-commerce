import { Component } from '@angular/core';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent {
  cartArray: any[] = [];

ngOnInit(){
  let cart = localStorage.getItem('cart');
  this.cartArray = cart ? JSON.parse(cart) : [];
  console.log("first",this.cartArray)
}
removeItem(data: any) {
  console.log("first", data.id);
  this.cartArray = this.cartArray.filter((item: { id: any; }) => item.id !== data.id);
  console.log("zcesdzfce",this.cartArray)
  localStorage.setItem('cart', JSON.stringify(this.cartArray));
}

calculateTotals(cartArray: any[]): { totalQuantity: number; totalPrice: number; totalGST: number; grandTotal: number} {
  const GST_RATE = 0.18;
  const result = cartArray.reduce(
    (acc, item) => {
      acc.totalQuantity += item.quantity || 0;
      acc.totalPrice += (item.quantity || 0) * (item.price || 0);
      return acc;
    },
    { totalQuantity: 0, totalPrice: 0 }
  );
  const totalGST = result.totalPrice * GST_RATE;
  const grandTotal = result.totalPrice + totalGST;
  return { ...result, totalGST, grandTotal };
}

}


