import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-sportskit',
  templateUrl: './sportskit.component.html',
  styleUrls: ['./sportskit.component.css']
})
export class SportskitComponent {
  constructor(private authservice:AuthserviceService,private router:Router) { }
  allData: any[] = [];
  isLoading: boolean = true;

ngOnInit(){
  this.getProducts()
}
getProducts() {
  this.authservice.womenWatches().subscribe(
    (res) => {
      console.log("API response:", res);
      if (Array.isArray(res.products)) {
        this.allData = res.products;
        this.isLoading = false;
      } else {
        console.error("Invalid API response format. Expected an array of products.");
      }
      console.log("Updated allData:", this.allData);
    },
    (error) => {
      console.error("API request error:", error);
      this.isLoading = false;
    }
  );
}

details(id:number){
  this.router.navigate(['/sellerhome/singleproduct', id]);
}
}
