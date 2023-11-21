import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-singleproduct-details',
  templateUrl: './singleproduct-details.component.html',
  styleUrls: ['./singleproduct-details.component.css']
})
export class SingleproductDetailsComponent {
  product: any; // This will hold the single product data
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private authService: AuthserviceService) {}
  productQuantity:number=1;
  ngOnInit() {
    localStorage.getItem('[cart]')
    console.log("adsdfgh", localStorage.getItem('[cart]'))
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.authService.getSingleProduct(id).subscribe(
        (res) => {
          console.log("API response:", res);
          if (res) {
            this.product = res;
            this.isLoading = false;
          } else {
            console.error("Invalid API response format. Expected a product object.");
          }
          console.log("Updated product:", this.product);
        },
        (error) => {
          console.error("API request error:", error);
          this.isLoading = false;
        }
      );
    });
  }
  addToCart(data: any, quantity: number) {
    let cart = localStorage.getItem('cart');
    console.log("cart", cart);
    let cartArray = cart ? JSON.parse(cart) : [];
    const existingItem = cartArray.find((item: { id: any; }) => item.id === data.id);
    if (existingItem) {
      existingItem.quantity += quantity;
      console.log('Quantity updated in the cart:', existingItem);
    } else {
      data.quantity = quantity;
      cartArray.push(data);
      console.log('Added to cart:', data);
    }
    localStorage.setItem('cart', JSON.stringify(cartArray));
  }


  quantity(val:string){
    console.log("first")
    if(this.productQuantity<20 && val=="max"){
      console.log("second")
      this.productQuantity+=1
    }else if
      (this.productQuantity>1 && val=="min"){
        console.log("second ")
        this.productQuantity-=1
      }
    }
}
