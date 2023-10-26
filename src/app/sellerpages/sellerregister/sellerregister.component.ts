import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-sellerregister',
  templateUrl: './sellerregister.component.html',
  styleUrls: ['./sellerregister.component.css']
})
export class SellerregisterComponent {
  sellerForm:any=FormGroup;
  formSubmitted = false;
constructor(private fb:FormBuilder,private userservice:UserService,private router:Router,private toastr: ToastrService){
  this.sellerForm = this.fb.group({
    Name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    SellerID: ['', Validators.required],
    password: ['',[Validators.required, Validators.minLength(8)]],
    confirmedPassword: ['', Validators.required],
  });
}

sellerRegister(){
  this.formSubmitted = true;
  let data=this.sellerForm.value
  console.log("first",data)
  if(this.sellerForm.password===this.sellerForm.confirmedPassword){
    this.userservice.sellerRegister(data).subscribe((res)=>{
      console.log("111111111",res)
      if(res){
        console.log("seller registered")
        this.toastr.success("Seller Registered Successfully")
        this.router.navigate(['/seller/login'])
      }else{
        this.toastr.error("Registration failed")
        console.log("error")
      }
    })
   }else{
    this.toastr.warning("Password does not matched")
   }
}
}
