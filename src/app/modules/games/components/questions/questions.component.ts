import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  @Input() question!: { text: string; options: string[]; answer: string };
  @Input() order: number = 0
  @Output() answerSelected = new EventEmitter<boolean>();

  selectAnswer(option: string) {
    const isCorrect = option === this.question.answer;
    this.answerSelected.emit(isCorrect);
  }
}
