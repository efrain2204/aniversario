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

  descargarpdf(){
    const pdfUrl = 'assets/pdf/amor.pdf'; // Ruta del archivo en assets
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'miarchivo.pdf';  // Nombre del archivo descargado
    link.click();
  }

}
