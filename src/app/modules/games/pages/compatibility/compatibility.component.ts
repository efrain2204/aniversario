import { Component } from '@angular/core';

@Component({
  selector: 'app-compatibility',
  templateUrl: './compatibility.component.html',
  styleUrls: ['./compatibility.component.scss']
})
export class CompatibilityComponent {
  preguntas: any[] = [
    {
      pregunta: '¿Cuál es su comida favorita?',
      respuestas: ['Pizza', 'Hamburguesa', 'Pasta', 'Sushi'],
      respuestaCorrecta: 'Pizza'
    },
    {
      pregunta: '¿Qué película le gusta más?',
      respuestas: ['Avengers', 'Titanic', 'Matrix', 'El Señor de los Anillos'],
      respuestaCorrecta: 'Avengers'
    },
    {
      pregunta: '¿Cuál es su color favorito?',
      respuestas: ['Rojo', 'Azul', 'Verde', 'Amarillo'],
      respuestaCorrecta: 'Rojo'
    }
  ];
  preguntaActual: any = this.preguntas[0];
  compatibilidad: number = 0;
  respuestaCorrecta: number = 0;
  respuestaSeleccionada: boolean = false; // Variable para controlar si ya se ha seleccionado una opción
  respuestaIncorrecta: boolean = false;

  responder(respuesta: string): void {
    if (this.respuestaSeleccionada) return; // Si ya se seleccionó una opción, no hacer nada
    this.respuestaSeleccionada = true; // Marcar que se ha seleccionado una opción
    this.respuestaIncorrecta = respuesta !== this.preguntaActual.respuestaCorrecta; // Verificamos si la respuesta es incorrecta

    if (!this.respuestaIncorrecta) {
      this.respuestaCorrecta++;
      this.compatibilidad = Math.round((this.respuestaCorrecta / this.preguntas.length) * 100);
    }
    if (respuesta === this.preguntaActual.respuestaCorrecta) {
      this.respuestaCorrecta++;
      this.compatibilidad = Math.round((this.respuestaCorrecta / this.preguntas.length) * 100);
    }

    const siguientePreguntaIndex = this.preguntas.indexOf(this.preguntaActual) + 1;
    if (siguientePreguntaIndex < this.preguntas.length) {
      setTimeout(() => {
        this.preguntaActual = this.preguntas[siguientePreguntaIndex];
        this.respuestaSeleccionada = false; // Permitir seleccionar nueva opción en la siguiente pregunta
      }, 1000); // Un pequeño retraso antes de cambiar la pregunta
    } else {
      this.irResultado();
    }
  }

  irResultado(): void {
    // Aquí rediriges al componente de resultados
  }
}
