import { Component } from '@angular/core';
import {GamesCoreService} from "../services/games-core.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-dashboard-games',
  templateUrl: './dashboard-games.component.html',
  styleUrls: ['./dashboard-games.component.scss']
})
export class DashboardGamesComponent {

  constructor(
    public coreGame:GamesCoreService,
    private router:Router,
    private authService: AuthService,
  ) {}

  redirectPage(){
    this.authService.allowAccess = true;
    this.router.navigate(['/dashboard']);
  }
  back(){
    this.router.navigate(['/auth']);
  }
}
