import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
  standalone: true
})
export class AboutUs {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
