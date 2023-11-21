import { Component } from '@angular/core';

@Component({
  selector: 'app-kidsclothes',
  templateUrl: './kidsclothes.component.html',
  styleUrls: ['./kidsclothes.component.css']
})
export class KidsclothesComponent {
  currentStep = 1;
  nextStep(step: number) {
    if (step === this.currentStep && this.currentStep < 3) {
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
