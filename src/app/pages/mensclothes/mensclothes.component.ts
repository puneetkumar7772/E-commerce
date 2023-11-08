import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-mensclothes',
  templateUrl: './mensclothes.component.html',
  styleUrls: ['./mensclothes.component.css']
})
export class MensclothesComponent {
constructor(private authservice:AuthserviceService){}
Data: any[] = [];
isLoading: boolean = true;
ngOnInit(){
  this.menClothes()
}
menClothes() {
  this.authservice.getMenClothes().subscribe(
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

}
