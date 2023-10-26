import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(){}
  currentStep = 1;

  ngOnInit() {
    this.setStepVisibility(this.currentStep, 'block');
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
