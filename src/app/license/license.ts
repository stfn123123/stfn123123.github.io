import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-license',
  imports: [
    RouterLink
  ],
  templateUrl: './license.html',
  styleUrl: './license.css',
  standalone: true
})
export class License {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
