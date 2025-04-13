import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesCoreService {

  bestScoreTrivia = 0; //max 100
  bestScoreMemory = 0; //max 90
  bestScoreHunterHeart = 0; //max xx
  allowDados = false; //max xx
  allowPuzzle = false; //max xx
  allowRoulette = false; //max xx
  allowCompatibility = 0; //max xx

  backRouter = ''
  scoreToShow = 0;

  constructor() { }


  allowEnterButton(){
    return (this.bestScoreTrivia >= 80) &&
      (this.bestScoreMemory>=80) &&
      (this.bestScoreHunterHeart >=7) &&
      this.allowPuzzle &&
      (this.allowCompatibility>=70)
    // return true
  }
  resetValues(){
    this.bestScoreTrivia = 0; //max 100
    this.bestScoreMemory = 0; //max 90
    this.bestScoreHunterHeart = 0; //max xx
    this.allowDados = false; //max xx
    this.allowPuzzle = false; //max xx
    this.allowRoulette = false; //max xx
    this.allowCompatibility = 0; //max xx
  }
}
