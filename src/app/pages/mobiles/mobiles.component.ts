import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  constructor(private authservice:AuthserviceService){}
  Data: any[] = [];
  ngOnInit(){
    this.mobiles()
  }
  mobiles() {
    this.authservice.getMobiles().subscribe(
      (res) => {
        console.log("API response:", res);
        if (Array.isArray(res.products)) {
          this.Data = res.products;
        } else {
          console.error("Invalid API response format. Expected an array of products.");
        }
        console.log("Updated allData:", this.Data);
      },
      (error) => {
        console.error("API request error:", error);
      }
    );
  }
}
