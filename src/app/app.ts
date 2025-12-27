import { Component, signal } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive ],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  protected readonly title = signal('praxisbsp');
  showCookies: boolean = false;

  ngOnInit() {
    // Prüfen, ob der User bereits eine Wahl getroffen hat
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      this.showCookies = true;
    }
  }

  setCookies(agreed: boolean) {
    // Speichert die Entscheidung dauerhaft im Browser
    localStorage.setItem('cookieConsent', agreed ? 'accepted' : 'declined');
    this.showCookies = false;
  }

}
