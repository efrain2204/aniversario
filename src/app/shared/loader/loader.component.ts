import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageRendererComponent} from "../image-renderer/image-renderer.component";

@Component({
  selector: 'loader',
  standalone: true,
  imports: [CommonModule, ImageRendererComponent],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() imageUrl: string = 'https://media.tenor.com/LBFqyVANEtkAAAAi/emm-thinking.gif'; // URL por defecto si no se pasa ninguna

}
