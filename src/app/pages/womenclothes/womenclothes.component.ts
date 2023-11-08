import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-womenclothes',
  templateUrl: './womenclothes.component.html',
  styleUrls: ['./womenclothes.component.css']
})
export class WomenclothesComponent {
  constructor(private authservice:AuthserviceService){}

  allData: any[] = [];
  isLoading: boolean = true;


  ngOnInit(){
    this.getMenShoes()
  }
  getMenShoes() {
    this.authservice.getWomenClotes().subscribe(
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
}
