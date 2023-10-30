import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm:any=FormGroup;
  formSubmitted = false;

  constructor(private fb:FormBuilder,private userservice:UserService ,private router:Router,private toastr: ToastrService){
    this.myForm = this.fb.group({
    Name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8)]],
    confirmedPassword: ['', Validators.required],
  });
}

submitForm(){
  this.formSubmitted = true;
  let body=this.myForm.value
  console.log("**************",body)

 if(this.myForm.password===this.myForm.confirmedPassword){
  this.userservice.userRegister(body).subscribe((res)=>{
    console.log("111111111",res)
    if(res){
      console.log("user registered")
      this.toastr.success("User Registered Successfully")
      this.router.navigate(['/user/login'])
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
