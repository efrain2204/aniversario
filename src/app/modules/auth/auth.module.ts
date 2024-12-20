import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {BunnyInputComponent} from "../../shared/bunny-input/bunny-input.component";
import {ButtonComponent} from "../../shared/button/button.component";
import {PopupComponent} from "../../shared/popup/popup.component";
import {ImageRendererComponent} from "../../shared/image-renderer/image-renderer.component";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BunnyInputComponent,
    ButtonComponent,
    PopupComponent,
    ImageRendererComponent
  ]
})
export class AuthModule { }
