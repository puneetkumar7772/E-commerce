import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myForm:any=FormGroup;

  constructor(private fb:FormBuilder,private authService:AuthserviceService ,private router:Router,private toastr: ToastrService){
    this.myForm = this.fb.group({
    firstname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8)]],
    confirmedPassword: ['', Validators.required],
  });
}

submitForm(){
}
}
