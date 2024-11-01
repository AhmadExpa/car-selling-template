import { Component } from '@angular/core';

@Component({
  selector: 'app-trade-in',
  templateUrl: './trade-in.component.html',
  styleUrl: './trade-in.component.css'
})
export class TradeInComponent {
  currentStep: number = 1;
  userDetails = {
    name: '',
    email: '',
    phone: ''
  };
  carDetails = {
    make: '',
    model: '',
    year: null,
    mileage: null
  };

  // Navigate to the next step
  nextStep() {
    if (this.currentStep === 1) {
      this.currentStep = 2;
    }
  }

  // Navigate back to the previous step
  prevStep() {
    if (this.currentStep === 2) {
      this.currentStep = 1;
    }
  }

  // Submit the form (final step)
  submitForm() {
    console.log('User Details:', this.userDetails);
    console.log('Car Details:', this.carDetails);
    alert('Thank you! Your trade-in details have been submitted.');
  }
}
