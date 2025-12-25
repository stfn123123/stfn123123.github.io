import { Component, signal } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {PrivacyNotice} from './privacy-notice/privacy-notice';
import {NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, PrivacyNotice, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('praxisbsp');
}
