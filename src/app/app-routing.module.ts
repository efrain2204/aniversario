import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule} from "./modules/auth/auth.module";

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }, // Ruta vacía carga el módulo Login
  { path: '**', redirectTo: '' } // Redirige rutas desconocidas a la ruta vacía
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
