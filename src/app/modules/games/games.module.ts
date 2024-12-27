import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { DashboardGamesComponent } from './dashboard-games/dashboard-games.component';
import { TriviaComponent } from './pages/trivia/trivia.component';
import {RouterModule} from "@angular/router";
import { MemoryComponent } from './pages/memory/memory.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { TimerComponent } from './components/timer/timer.component';
import { ScoreComponent } from './components/score/score.component';
import { CardMemoryComponent } from './components/card-memory/card-memory.component';
import { HeartHunterComponent } from './pages/heart-hunter/heart-hunter.component';
import { LoveDadosComponent } from './pages/love-dados/love-dados.component';
import { PuzzleComponent } from './pages/puzzle/puzzle.component';
import {FormsModule} from "@angular/forms";
import { RouletteComponent } from './pages/roulette/roulette.component';
import { CompatibilityComponent } from './pages/compatibility/compatibility.component';
import {ButtonComponent} from "../../shared/button/button.component";
import { ScoreTableComponent } from './components/score-table/score-table.component';


@NgModule({
  declarations: [
    DashboardGamesComponent,
    TriviaComponent,
    MemoryComponent,
    QuestionsComponent,
    TimerComponent,
    ScoreComponent,
    CardMemoryComponent,
    HeartHunterComponent,
    LoveDadosComponent,
    PuzzleComponent,
    RouletteComponent,
    CompatibilityComponent,
    ScoreTableComponent
  ],
    imports: [
        CommonModule,
        GamesRoutingModule,
        RouterModule,
        FormsModule,
        ButtonComponent
    ]
})
export class GamesModule { }
