import { Component } from '@angular/core';

@Component({
  selector: 'app-about-game',
  imports: [],
  templateUrl: './about-game.html',
  styleUrl: './about-game.css',
})
export class AboutGame {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
