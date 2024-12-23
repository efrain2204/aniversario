import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { DashboardGamesComponent } from './dashboard-games/dashboard-games.component';
import { TriviaComponent } from './pages/trivia/trivia.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    DashboardGamesComponent,
    TriviaComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    RouterModule
  ]
})
export class GamesModule { }
