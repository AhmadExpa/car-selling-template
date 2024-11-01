import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  faqs = [
    {
      question: 'What documents are required for a trade-in?',
      answer: 'Emirates ID, driving license, registration card (Mulkiya), service history, and car keys.',
      isOpen: false
    },
    {
      question: 'Can I trade in a car with outstanding finance?',
      answer: 'Yes, we can settle any outstanding finances on your behalf.',
      isOpen: false
    }
    // Add more FAQs as needed
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
