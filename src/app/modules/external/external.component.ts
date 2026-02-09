import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-external',
  standalone: true,
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss']
})
export class ExternalComponent {

  safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://docs.google.com/spreadsheets/d/1KLxnmsWH8YJpDhQkXL_W7AWipX3c8JRTxDyBaYKK2Q0/edit'
  );

  constructor(private sanitizer: DomSanitizer, private router: Router) { }

  goLogin(){
    this.router.navigate(['']);
  }
}
