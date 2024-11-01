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
  imageUrl = 'https://cdn.builder.io/api/v1/image/assets/4431720442a34f5886a578eaf790e769/7d575aaea0baab733048d0f9456e71e7826033281b38c3f3ded7366cc168d157?apiKey=4431720442a34f5886a578eaf790e769&';
}
