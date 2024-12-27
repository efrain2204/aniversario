import {Component} from '@angular/core';
import {GamesCoreService} from "../../services/games-core.service";
import {Router} from "@angular/router";
import {core} from "@angular/compiler";

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent {
  cards = [
    {id: 1, image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184320/assests/xuduwewottfclpxvqvgn.jpg'},
    {id: 2, image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184326/assests/vtzwrs06bluyckvgfcnm.jpg'},
    {id: 3, image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184328/assests/mccwtbmlyijguywppp4s.jpg'},
    {id: 4, image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184322/assests/k1w0p9w06vdafzmosnnk.jpg'},
    {id: 5, image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184320/assests/ak8f0uqniqipx3nvajke.jpg'},
    {id: 6, image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184318/assests/i2lj1eon4gqprbglcl9e.png'},
    {id: 7, image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184330/assests/okpegbozqewltdesuuif.jpg'},
    {id: 8, image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184329/assests/vquffz9bkk7jcycr0f8w.jpg'},
    {id: 9, image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184322/assests/p8ubafvvelmf7cdjwtwn.jpg'},

  ];
  shuffledCards = this.shuffle([...this.cards, ...this.cards]);
  flippedCards: number[] = [];
  matchedCards: number[] = [];
  score = 0;
  firstFlippedIndex: number | null = null;

  constructor(public coreGame: GamesCoreService, private router: Router) {
  }

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
    if(this.score >= this.coreGame.bestScoreMemory) {
      this.coreGame.bestScoreMemory = this.score;
    }
    this.coreGame.scoreToShow = this.score;
    this.coreGame.backRouter = '/games/memory'
    this.router.navigate(['games/score']);
  }

  protected readonly core = core;
}
