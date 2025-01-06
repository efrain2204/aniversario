import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[AuthGuard]},
  { path: 'games', loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule)},
  { path: 'notes', loadChildren: () => import('./modules/notes/notes.module').then(m => m.NotesModule)},
  { path: '**', redirectTo: '' } // Redirige rutas desconocidas a la ruta vacía
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
