import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../auth/login/login.component";
import {DashboardGamesComponent} from "./dashboard-games/dashboard-games.component";
import {TriviaComponent} from "./pages/trivia/trivia.component";
import {MemoryComponent} from "./pages/memory/memory.component";
import {ScoreComponent} from "./components/score/score.component";
import {HeartHunterComponent} from "./pages/heart-hunter/heart-hunter.component";
import {LoveDadosComponent} from "./pages/love-dados/love-dados.component";
import {PuzzleComponent} from "./pages/puzzle/puzzle.component";
import {RouletteComponent} from "./pages/roulette/roulette.component";
import {CompatibilityComponent} from "./pages/compatibility/compatibility.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardGamesComponent,
    children: [
      {
        path: 'trivia', component: TriviaComponent
      },
      {
        path: 'memory', component: MemoryComponent
      },
      {
        path: 'score', component: ScoreComponent
      },
      {
        path: 'hearHunter', component: HeartHunterComponent
      },
      {
        path: 'dados', component: LoveDadosComponent
      },
      {
        path: 'puzzle', component: PuzzleComponent
      },
      {
        path: 'roulette', component: RouletteComponent
      },
      {
        path: 'compatibility', component: CompatibilityComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {
}
