import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface modelSimpleQuestion{
  question: string;
  button1Text?: string;
  button2Text?: string;
  urlImg?:string;
  onButton1Click?: () => void; // Función para el botón 1
  onButton2Click?: () => void; // Función para el botón 2
}

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Input() label: string = '';
  @Output() clickClose = new EventEmitter<void>();

  // Método para cerrar el popup
  closePopup(): void {
    this.clickClose.emit();  // Emitir el evento para cerrar el popup
  }
}
