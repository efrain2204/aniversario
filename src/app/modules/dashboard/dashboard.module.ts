import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FlowerComponent } from './flower/flower.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ViewGalleryComponent} from "../../shared/gallery/gallery.component";


@NgModule({
  declarations: [
    FlowerComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ViewGalleryComponent,
  ]
})
export class DashboardModule { }
