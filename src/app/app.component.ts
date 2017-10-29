import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    original: number;
    guess: number;
    deviation: number;
    noOfTries: number;

    constructor()
    {
        this.initializeGame();
    }

    initializeGame()
    {
        this.original = Math.floor((Math.random() * 1000) + 1);
        this.guess = null;
        this.deviation = null;
        this.noOfTries = 0;
    }

    verifyGuess()
    {
        this.deviation = this.original - this.guess;
        this.noOfTries = this.noOfTries + 1;
    }
}
