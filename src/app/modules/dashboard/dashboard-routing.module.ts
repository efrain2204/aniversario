import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlowerComponent} from "./flower/flower.component";
import {GalleryComponent} from "./gallery/gallery.component";


const routes: Routes = [
  { path: '', component: FlowerComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
