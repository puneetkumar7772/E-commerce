import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {


  adminLoginForm:any=FormGroup;
  formSubmitted = false;

  constructor(private fb:FormBuilder,private userservice:UserService,private toastr:ToastrService,private router:Router){
    this.adminLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,]],
    });
  }


  loginAdmin(){
    this.formSubmitted = true;
    let value=this.adminLoginForm.value
    console.log("first",value)
    this.userservice.adminLogin(value).subscribe((res)=>{
      console.log("second",res)
      if(res){
        console.log("Admin login")
        this.toastr.success("Admin Login successfully")
        this.router.navigate(['/admin/userlist'])
      }else{
        this.toastr.warning("Admin not found")
        console.log("Admin not found")
        alert('Admin not found')
      }
    })
  }
}
