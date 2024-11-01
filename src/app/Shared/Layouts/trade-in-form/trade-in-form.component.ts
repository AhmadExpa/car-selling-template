import { Component } from '@angular/core';

@Component({
  selector: 'app-trade-in-form',
  templateUrl: './trade-in-form.component.html',
  styleUrl: './trade-in-form.component.css'
})
export class TradeInFormComponent {
  currentStep: number = 1;

  nextStep() {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  goBack() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    // Handle form submission logic here
    console.log("Form submitted");
  }
}
