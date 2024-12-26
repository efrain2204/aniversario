import { Component } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent {
  cards = [
    { id: 1, image: 'assets/images/foto1.jpg' },
    { id: 2, image: 'assets/images/foto2.jpg' },
    { id: 3, image: 'assets/images/foto3.jpg' },
    { id: 4, image: 'assets/images/foto4.jpg' },
    { id: 5, image: 'assets/images/foto5.jpg' },
    { id: 6, image: 'assets/images/foto6.jpg' },

  ];
  shuffledCards = this.shuffle([...this.cards, ...this.cards]);
  flippedCards: number[] = [];
  matchedCards: number[] = [];
  score = 0;
  firstFlippedIndex: number | null = null;

  shuffle(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  onCardClicked(index: number) {
    if (this.flippedCards.includes(index) || this.matchedCards.includes(this.shuffledCards[index].id)) {
      return;
    }

    this.flippedCards.push(index);

    if (this.firstFlippedIndex === null) {
      this.firstFlippedIndex = index;
    } else {
      const firstCard = this.shuffledCards[this.firstFlippedIndex];
      const secondCard = this.shuffledCards[index];

      if (firstCard.id === secondCard.id) {
        this.matchedCards.push(firstCard.id);
        this.score += 10;
      }

      setTimeout(() => {
        this.flippedCards = [];
        this.firstFlippedIndex = null;
      }, 1000);
    }
  }

  onTimeUp() {
    localStorage.setItem('score', String(this.score));
    window.location.href = '/score';
  }
}
