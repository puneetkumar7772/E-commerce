import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/auth/authservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  currentStep = 1;
  productForm:any= FormGroup;
  constructor(private fb: FormBuilder,private authservice:AuthserviceService,private toastr:ToastrService) {}

  ngOnInit() {
    this.setStepVisibility(this.currentStep, 'block');
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      quantity: ['', Validators.required],
      discountPercentage: ['',Validators.required],
      productSize: ['',Validators.required],
      brandName: ['',Validators.required],
      productDescription: ['',Validators.required],
      shopName: ['',Validators.required],
      ratings: ['',Validators.required],
      shopAddress: ['',Validators.required],
      images: this.fb.array([]),
  })
  }
addProduct(){
  let value=this.productForm.value
  console.log("#####################",value)
  this.authservice.addNewProduct(value).subscribe((res)=>{
    console.log("111111111",res)
    if(res){
      console.log("seller registered")
      this.toastr.success("Seller Registered Successfully")

    }else{
      this.toastr.error("Registration failed")
      console.log("error")
    }
  })
}

  nextStep(step: number) {
    if (step === this.currentStep && this.currentStep < 4) {
      this.setStepVisibility(this.currentStep + 1, 'block');
      this.setStepVisibility(this.currentStep, 'none');
      this.currentStep++;
    }
  }

  prevStep(step: number) {
    if (step === this.currentStep && this.currentStep > 1) {
      this.setStepVisibility(this.currentStep - 1, 'block');
      this.setStepVisibility(this.currentStep, 'none');
      this.currentStep--;
    }
  }

  setStepVisibility(step: number, display: string) {
    const element = document.querySelector(`.step:nth-child(${step})`) as HTMLElement;
    if (element) {
      element.style.display = display;
    }
  }




}
