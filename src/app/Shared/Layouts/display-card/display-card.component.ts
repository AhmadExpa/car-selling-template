import { Component } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.css'
})
export class DisplayCardComponent {
  carName = 'Toyota Yaris 1.5L SE';
  carYear = '2018';
  mileage = '137985 Kms.';
  transmission = 'Automatic';
  engineSize = '2.6L';
  seats = '5';
  price = 'AED 47,999';
  emi = 'AED 1,393 EMI';
  imageUrl = 'assets/Images/toyota-yaris.png';
}
