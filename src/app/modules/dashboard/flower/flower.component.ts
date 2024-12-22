import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.scss']
})
export class FlowerComponent {

  constructor(private router:Router) {
  }
  showAlbum(){
    this.router.navigate(['dashboard/gallery'])
  }

}
