import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:any=FormGroup;

  constructor(private fb:FormBuilder,private userservice:UserService,private toastr:ToastrService,private router:Router){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required,]],
    });
  }


  loginUser(){
    let value=this.loginForm.value
    console.log("first",value)
    this.userservice.userLogin(value).subscribe((res)=>{
      console.log("second",res)
      if(res){
        console.log("User login")
        this.toastr.success("User Login successfully")
        this.router.navigate([''])
      }else{
        this.toastr.warning("User not found")
        console.log("user not found")
        alert('user not found')
      }
    })
  }

}
