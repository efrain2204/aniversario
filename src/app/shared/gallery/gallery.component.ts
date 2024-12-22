import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'view-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class ViewGalleryComponent implements OnInit{
  displayedImages: string[] = [
    'assets/images/foto1.jpg',
    'assets/images/foto2.jpg',
    'assets/images/foto3.jpg',
    'assets/images/foto4.jpg',
    'assets/images/foto5.jpg',
    'assets/images/foto6.jpg',
    'assets/images/foto7.jpg',
    'assets/images/foto8.jpg',
    'assets/images/foto9.jpg',
    'assets/images/foto10.jpg',
    'assets/images/foto11.jpg',
    'assets/images/foto12.jpg',
    'assets/images/foto13.jpg',
    'assets/images/foto14.jpg',
    'assets/images/foto15.jpg',
    'assets/images/foto16.jpg',
    'assets/images/foto17.jpg',
    'assets/images/foto18.jpg',
    'assets/images/foto19.jpg',
    'assets/images/foto20.jpg',
    'assets/images/foto21.jpg',
    'assets/images/foto22.jpg',
    'assets/images/foto23.jpg',
    'assets/images/foto24.jpg',
    'assets/images/foto25.jpg',
    'assets/images/foto26.jpg',
    'assets/images/foto27.jpg',
    'assets/images/foto28.jpg'
  ];

  ngOnInit() {
   }

  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Intercambia los elementos
    }
    return array;
  }

  openModal(imageSrc: string): void {
    const modal = document.getElementById('myModal') as HTMLElement;
    const modalImg = document.getElementById('modal-img') as HTMLImageElement;
    modalImg.src = imageSrc;
    modal.style.display = 'flex'; // Muestra el modal
  }

  closeModal(): void {
    const modal = document.getElementById('myModal') as HTMLElement;
    modal.style.display = 'none'; // Oculta el modal
  }


}
