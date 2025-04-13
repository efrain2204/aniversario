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
    {image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1744569318/xoeloaoyxbevsi7lc0fp.jpg', id: 1},
    {image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1744569318/q2q1ipvslbqthhrlcdks.jpg', id: 2},
    {image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1744569318/xffqulbxockdopkvdmgs.jpg', id: 3},
    {image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1744569318/qsklqd4f6n9sitxcajgd.jpg', id: 4},
    {image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1744569317/z600xdcn2gq2aiwntgmq.jpg', id: 5},
    {image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1744569318/jnnpll85tka2ui8ftmnb.jpg', id: 6},
    {image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1744569317/kpbo28ns3gbufykhnj68.jpg', id: 7},
    {image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1744569317/gcawlmxqaef0uv54dxtf.jpg', id: 8},
    {image: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1744569317/wpzndzllb96v5drmpyue.jpg', id: 9},

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
