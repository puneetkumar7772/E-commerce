import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-mensfootwear',
  templateUrl: './mensfootwear.component.html',
  styleUrls: ['./mensfootwear.component.css']
})
export class MensfootwearComponent {
constructor(private authservice:AuthserviceService){}

allData: any[] = [];
isLoading: boolean = true;

ngOnInit(){
  this.getMenShoes()
}
getMenShoes() {
  this.authservice.getMenShoes().subscribe(
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
