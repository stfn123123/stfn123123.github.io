import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buy-page',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './buy-page.html',
  styleUrl: './buy-page.css',
  standalone: true,
})
export class BuyPage {
  isModalOpen: boolean = false;
  privacyAccepted: boolean = false;
  isPaid: boolean = false;

  openModal() { this.isModalOpen = true; }
  closeModal() { this.isModalOpen = false; }

  processPayment() {
    if (this.privacyAccepted) {
      this.isModalOpen = false;
        this.isPaid = true;
    }
  }

}
