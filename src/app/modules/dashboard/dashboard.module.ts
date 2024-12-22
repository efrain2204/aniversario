import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FlowerComponent } from './flower/flower.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ViewGalleryComponent} from "../../shared/gallery/gallery.component";
import {ImageRendererComponent} from "../../shared/image-renderer/image-renderer.component";
import {ButtonComponent} from "../../shared/button/button.component";
import { FinalComponent } from './final/final.component';


@NgModule({
  declarations: [
    FlowerComponent,
    GalleryComponent,
    FinalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ViewGalleryComponent,
    ImageRendererComponent,
    ButtonComponent,
  ]
})
export class DashboardModule { }
