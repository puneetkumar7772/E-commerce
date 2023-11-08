import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-roomfurniture',
  templateUrl: './roomfurniture.component.html',
  styleUrls: ['./roomfurniture.component.css']
})
export class RoomfurnitureComponent {
  constructor(private authservice:AuthserviceService) { }
  allData: any[] = [];
  isLoading: boolean = true;


ngOnInit(){
  this.getProducts()
}
getProducts() {
  this.authservice.roomFurniture().subscribe(
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
