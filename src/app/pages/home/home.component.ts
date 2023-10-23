import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/auth/authservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authservice:AuthserviceService) { }
  allData: any[] = [];


ngOnInit(){
  this.getProducts()
}
getProducts() {
  this.authservice.getAllProducts().subscribe(
    (res) => {
      console.log("API response:", res);
      if (Array.isArray(res.products)) {
        this.allData = res.products;
      } else {
        console.error("Invalid API response format. Expected an array of products.");
      }
      console.log("Updated allData:", this.allData);
    },
    (error) => {
      console.error("API request error:", error);
    }
  );
}

}
