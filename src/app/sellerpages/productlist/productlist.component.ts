import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
constructor(private authservice:AuthserviceService,private toastr:ToastrService ){}
data:any[]=[]
ngOnInit(){
this.listOfProduct()
}

listOfProduct(){
  this.authservice.getAllProducts().subscribe(
    (res) => {
      console.log("Response:", res);
      if (Array.isArray(res.products)) {
        this.data = res.products;
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

deleteProducts(_id:any){
  this.authservice.deleteProduct(_id).subscribe((res)=>{
    console.log(res)
    if(res){
      console.log("product deleted successfully ")
      this.toastr.success("Product deleted successfully")
      this.listOfProduct()
    }else{
      console.log("product not matched")
    }
  })

}

}
