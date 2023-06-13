import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaroselComponent } from '../carosel/carosel.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, CaroselComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  words: string[] = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Php',
    'React',
    'Angular',
    'Java',
  ]; // Array of words to be displayed with the typewriter effect
  currentWordIndex = 0; // Index of the current word being typed
  currentWord = ''; // The currently typed word

  ngOnInit() {
    this.startTyping();
  }

  startTyping() {
    const word = this.words[this.currentWordIndex];
    const intervalId = setInterval(() => {
      this.currentWord += word.charAt(this.currentWord.length);
      if (this.currentWord === word) {
        clearInterval(intervalId);
        setTimeout(() => {
          this.startErasing();
        }, 1500); // Wait for 1.5 seconds before erasing the word
      }
    }, 400);
  }

  startErasing() {
    const word = this.words[this.currentWordIndex];
    const intervalId = setInterval(() => {
      this.currentWord = this.currentWord.slice(0, -1);
      if (this.currentWord === '') {
        clearInterval(intervalId);
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        setTimeout(() => {
          this.startTyping();
        }, 1500); // Wait for 1.5 seconds before typing the next word
      }
    }, 100);
  }
}
