import {Component, Input} from '@angular/core';

@Component({
  selector: 'score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.scss']
})
export class ScoreTableComponent {
  @Input() scoreLocal = 0;
  @Input() scoreGlobal = 0;
}
