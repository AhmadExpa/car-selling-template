import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {
  sectionTitle = 'HOW IT WORKS';
  sectionDescription = `At First Choice Cars, we've designed the trade-in process to ensure you get the best value and a smooth transition to your new vehicle. Just follow these simple steps:`;

  steps: Step[] = [
    { title: 'GET A QUOTE', description: 'Start by providing information about your car, including make, model, year, and mileage.' },
    { title: 'SCHEDULE AN INSPECTION', description: 'Choose a convenient time for a free inspection, either at our showroom or at your home.' },
    { title: 'RECEIVE AN OFFER', description: 'After the inspection, we\'ll provide you with a competitive trade-in offer.' },
    { title: 'TRADE-IN', description: 'Accept the offer and trade in your car for a new one from our selection.' }
  ];
}
interface Step {
  title: string;
  description: string;
}