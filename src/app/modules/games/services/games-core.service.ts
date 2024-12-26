import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesCoreService {

  private _triviaScore = 0;


  get triviaScore(): number {
    return this._triviaScore;
  }

  set triviaScore(value: number) {
    this._triviaScore = value;
  }

  constructor() { }

  resetTriviaScore() {
    this._triviaScore = 0;
  }
}
