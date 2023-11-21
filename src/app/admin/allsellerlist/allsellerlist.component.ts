import { ChangeDetectorRef, Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-allsellerlist',
  templateUrl: './allsellerlist.component.html',
  styleUrls: ['./allsellerlist.component.css']
})
export class AllsellerlistComponent {
  constructor(private userservice:UserService,private toastr:ToastrService,private cdr: ChangeDetectorRef){}

  data:any[]=[]
  isLoading: boolean = true;
ngOnInit(){
this.listOfAllSeller()
}
ngOnChanges(){
  this.listOfAllSeller()
}

listOfAllSeller(){
  this.userservice.getAllSelers().subscribe(
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

deleteSeller(id:any){
  this.userservice.deleteSeller(id).subscribe((res)=>{
    console.log(res)
    if(res){
      console.log("seller deleted successfully")
      this.toastr.success("Seller deleted successfully")
      this.cdr.detectChanges();
      this.listOfAllSeller()

    }else{
      console.log("seller is not deleted")
    }
  })

}

}
