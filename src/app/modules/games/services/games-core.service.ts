import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesCoreService {

  bestScoreTrivia = 0; //max 100
  bestScoreMemory = 0; //max 90
  bestScoreHunterHeart = 0; //max xx

  backRouter = ''
  scoreToShow = 0;

  constructor() { }


  allowEnter(){
    // return (this.bestScoreTrivia >= 80) &&(this.bestScoreMemory>=70)
    return true;
  }
}
