import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  ngOnInit() {
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
}
