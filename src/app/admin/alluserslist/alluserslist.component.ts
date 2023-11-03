import { Component } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-alluserslist',
  templateUrl: './alluserslist.component.html',
  styleUrls: ['./alluserslist.component.css']
})
export class AlluserslistComponent {

  constructor(private userservice:UserService){}

  data:any[]=[]
ngOnInit(){
this.listOfAllUser()
}

listOfAllUser(){
  this.userservice.getAllUSers().subscribe(
    (res) => {
      console.log("Response:", res);
      if (Array.isArray(res)) {
        this.data = res;
      } else {
        console.error("Invalid API response format. Expected an array of products.");
      }
      console.log("Updated Data:", this.data);
    },
    (error) => {
      console.error("API request error:", error);
    }
  );
}

}
