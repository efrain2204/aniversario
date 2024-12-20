import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

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
