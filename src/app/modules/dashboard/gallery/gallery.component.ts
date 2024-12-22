import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  constructor(private router: Router) {
  }
  back(){
    this.router.navigate(['/dashboard']);
  }
  goFinalMessage(){
    this.router.navigate(['/dashboard/final']);
  }
}
