import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent {

  constructor(private router:Router) {
  }
  backLogin(){
    this.router.navigate(['auth'])
  }

}
