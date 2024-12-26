import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {GamesCoreService} from "../../services/games-core.service";

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent {

  questions = [
    {text: '¿Cuál es la capital de Francia?', options: ['París', 'Madrid', 'Roma'], answer: 'París'},
    {text: '¿Cuánto es 2 + 2?', options: ['3', '4', '5'], answer: '4'},
    {text: '¿Qué lenguaje se usa en Angular?', options: ['Java', 'TypeScript', 'Python'], answer: 'TypeScript'},
  ];

  currentQuestion = 0;

  constructor(
    private router: Router,
    public coreGame: GamesCoreService
  ) {
  }

  onAnswerSelected(isCorrect: boolean) {
    if (isCorrect) {
      this.coreGame.triviaScore += 10
    }

    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    } else {
      this.router.navigate(['games/score']);
    }
  }

  onTimeUp() {
    this.onAnswerSelected(false);
  }
}
