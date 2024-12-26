import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent {
  images = [
    { name: 'Imagen 1', path: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184324/assests/ozx9dfykk5w55bqx16lz.jpg' },
    { name: 'Imagen 2', path: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184331/assests/ilquwoxz0jh93l5m6bdl.jpg' },
    { name: 'Imagen 3', path: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184323/assests/vyxbb36aevamixzulatr.jpg' }
  ];
  gridOptions = [3, 4, 5]; // 3x3, 4x4, 5x5 grids

  selectedImage: string = '';
  gridSize: number = 3;
  puzzlePieces: any[] = [];
  attempts: number = 0;
  puzzleSolved: boolean = false;

  loadPuzzle() {
    if (!this.selectedImage) return;
    this.puzzleSolved = false;
    this.attempts = 0;
    this.createPuzzle();
  }

  createPuzzle() {
    this.puzzlePieces = [];
    const image = new Image();
    image.src = this.selectedImage;
    image.onload = () => {
      const pieceWidth = image.width / this.gridSize;
      const pieceHeight = image.height / this.gridSize;

      let order = 1;
      for (let row = 0; row < this.gridSize; row++) {
        for (let col = 0; col < this.gridSize; col++) {
          const piece = {
            row: row,
            col: col,
            order: order,
            selected: false,
            image: this.cutImage(image, col * pieceWidth, row * pieceHeight, pieceWidth, pieceHeight)
          };
          this.puzzlePieces.push(piece);
          order++;
        }
      }

      // Desordenar las piezas
      this.shufflePieces();
    };
  }

  cutImage(image: HTMLImageElement, x: number, y: number, width: number, height: number): string {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(image, x, y, width, height, 0, 0, width, height);
    return canvas.toDataURL();
  }

  shufflePieces() {
    for (let i = this.puzzlePieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.puzzlePieces[i], this.puzzlePieces[j]] = [this.puzzlePieces[j], this.puzzlePieces[i]];
    }
  }

  getPieceStyle(index: number) {
    const piece = this.puzzlePieces[index];
    return {
      'background-position': `-${piece.col * 100}px -${piece.row * 100}px`
    };
  }

  selectPiece(index: number) {
    if (this.puzzleSolved) return;

    const selectedPiece = this.puzzlePieces[index];
    if (selectedPiece.selected) return; // No permitir seleccionar piezas ya seleccionadas

    // Asignar el número de orden
    selectedPiece.selected = true;
    selectedPiece.order = this.attempts + 1;
    this.attempts++;

    // Si alcanzó el número total de intentos, permite verificar
    if (this.attempts === this.puzzlePieces.length) {
      this.verifyPuzzle();
    }
  }

  verifyPuzzle() {
    this.puzzleSolved = true;
    for (let i = 0; i < this.puzzlePieces.length; i++) {
      const piece = this.puzzlePieces[i];
      if (piece.order !== i + 1) {
        this.puzzleSolved = false;
        break;
      }
    }

    if (this.puzzleSolved) {
      alert("¡Felicidades! Has resuelto el rompecabezas correctamente.");
    } else {
      alert("¡Ups! La secuencia no es correcta. Inténtalo de nuevo.");
    }
  }

  resetGame() {
    this.puzzlePieces = [];
    this.attempts = 0;
    this.puzzleSolved = false;
    this.createPuzzle();
  }
}
