import { ChangeDetectorRef, Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-alluserslist',
  templateUrl: './alluserslist.component.html',
  styleUrls: ['./alluserslist.component.css']
})
export class AlluserslistComponent {

  constructor(private userservice:UserService,private toastr:ToastrService,private cdr:ChangeDetectorRef){}

data:any[]=[]
isLoading: boolean = true;
ngOnInit(){
this.listOfAllUser()
}

listOfAllUser(){
  this.userservice.getAllUSers().subscribe(
    (res) => {
      console.log("Response:", res);
      if (Array.isArray(res)) {
        this.data = res;
        this.isLoading = false;
      } else {
        console.error("Invalid API response format. Expected an array of products.");
      }
      console.log("Updated Data:", this.data);
    },
    (error) => {
      console.error("API request error:", error);
      this.isLoading = false;
    }
  );
}

deleteUsers(id:any){
  this.userservice.deleteUSer(id).subscribe((res)=>{
    console.log(res)
    if(res){
      console.log("User deleted successfully")
      this.toastr.success("User deleted successfully")
      this.cdr.detectChanges();
      this.listOfAllUser()

    }else{
      console.log("User is not deleted")
    }
  })

}

}
