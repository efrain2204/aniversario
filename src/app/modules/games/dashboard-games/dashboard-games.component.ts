import { Component } from '@angular/core';
import {GamesCoreService} from "../services/games-core.service";

@Component({
  selector: 'app-dashboard-games',
  templateUrl: './dashboard-games.component.html',
  styleUrls: ['./dashboard-games.component.scss']
})
export class DashboardGamesComponent {

  constructor(public coreGame:GamesCoreService) {
  }

}
