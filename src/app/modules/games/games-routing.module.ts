import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../auth/login/login.component";
import {DashboardGamesComponent} from "./dashboard-games/dashboard-games.component";
import {TriviaComponent} from "./pages/trivia/trivia.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardGamesComponent,
    children: [
      {
        path: 'trivia', component: TriviaComponent
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
