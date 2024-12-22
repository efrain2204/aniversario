import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-renderer.component.html',
  styleUrls: ['./image-renderer.component.scss']
})
export class ImageRendererComponent {
  @Input() imageUrl: string = '';
  @Input() width: string = '100%'; // Ancho por defecto
  @Input() height: string = 'auto'; // Alto por defecto
}
