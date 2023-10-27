import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-sellerlogin',
  templateUrl: './sellerlogin.component.html',
  styleUrls: ['./sellerlogin.component.css']
})
export class SellerloginComponent {
  sellerloginForm:any=FormGroup;

constructor(private fb:FormBuilder,private userservice:UserService,private router:Router,private toastr:ToastrService){
  this.sellerloginForm=this.fb.group({
    SellerID:['',Validators.required],
    password:['',Validators.required]
  })
}

sellerLogin(){
  let body=this.sellerloginForm.value
  console.log("second",body);
  this.userservice.sellerLogin(body).subscribe((res)=>{
    console.log("second",res)
    if(res){
      console.log("Seller login")
      this.toastr.success("Seller Login successfully")
      this.router.navigate(['/sellerhome'])
    }else{
      this.toastr.warning("Seller not found")
      console.log("Seller not found")
      alert('Seller not found')
    }
  })
}
}
