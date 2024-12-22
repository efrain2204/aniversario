import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{
  @Input() label = 'Présioname ❤️'
  @Input() disabled = false;
  @Input() backgroundColor: string = '#ff5f6d';
  hearts: string[] = [];

  onClick(): void {
    this.addHeart();
  }

  addHeart(): void {
    const heartSymbol = '❤️';
    this.hearts.push(heartSymbol);
    setTimeout(() => {
      this.hearts.shift();
    }, 1000);
  }
}
