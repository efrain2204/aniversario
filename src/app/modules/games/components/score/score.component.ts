import { Component } from '@angular/core';
import {GamesCoreService} from "../../services/games-core.service";

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  constructor(
    public coreGame: GamesCoreService
  ) {
  }
}
