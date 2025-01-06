import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'bunny-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bunny-input.component.html',
  styleUrls: ['./bunny-input.component.scss']
})
export class BunnyInputComponent {

  @Input() control!: FormControl;
  @Input() showIcon: boolean = true;
  @Input() placeHolder = 'Escribe aquí...';

  private bunnySounds: string[] = [
    'assets/sounds/hit/hit.wav',
  ];

  playBunnySound(): void {
    const randomSound = this.bunnySounds[Math.floor(Math.random() * this.bunnySounds.length)];
    const audio = new Audio(randomSound);
    audio.play();
  }
}
