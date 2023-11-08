import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent {
  constructor(private authservice:AuthserviceService,private router:Router){}
  Data: any[] = [];
  isLoading: boolean = true;
  ngOnInit(){
    this.mobiles()
  }
  mobiles() {
    this.authservice.getLaptops().subscribe(
      (res) => {
        console.log("API response:", res);
        if (Array.isArray(res.products)) {
          this.Data = res.products;
          this.isLoading = false;
        } else {
          console.error("Invalid API response format. Expected an array of products.");
        }
        console.log("Updated allData:", this.Data);
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
