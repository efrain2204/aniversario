import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{
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
