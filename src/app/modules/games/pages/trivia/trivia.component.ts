import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { GamesCoreService } from "../../services/games-core.service";
import { core } from "@angular/compiler";

export interface questionsInterface {
  text: string;
  options: string[];
  answer: string;
}

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent {

  questions: questionsInterface[] = [
    { text: '¿Quién es el protagonista de Kimetsu no Yaiba?', options: ['Tanjiro', 'Zenitsu', 'Inosuke'], answer: 'Tanjiro' },
    { text: '¿Qué arma usa Tanjiro?', options: ['Katana', 'Lanza', 'Arco'], answer: 'Katana' },
    { text: '¿Cuál es el sueño de Zenitsu?', options: ['Ser fuerte y valiente', 'Dormir todo el día', 'Cantar canciones'], answer: 'Ser fuerte y valiente' },
    { text: '¿Qué le teme más a Zenitsu?', options: ['Insectos', 'Demonios', 'Tanjiro'], answer: 'Demonios' },
    { text: '¿Qué animal representa a Inosuke?', options: ['Jabalí', 'Conejo', 'Cabra'], answer: 'Jabalí' },
    { text: '¿Cuál es el estilo de respiración de Tanjiro?', options: ['Agua', 'Fuego', 'Viento'], answer: 'Agua' },
    { text: '¿Quién es la hermana de Tanjiro?', options: ['Nezuko', 'Shinobu', 'Kanao'], answer: 'Nezuko' },
    { text: '¿Qué poder especial tiene Nezuko?', options: ['Se convierte en demonio', 'Vuela', 'Lanza rayos'], answer: 'Se convierte en demonio' },
    { text: '¿Qué demonio fue responsable de la muerte de la familia de Tanjiro?', options: ['Muzan', 'Akaza', 'Kokushibo'], answer: 'Muzan' },
    { text: '¿Qué le gusta hacer a Inosuke cuando pelea?', options: ['Gritar mucho', 'Bailar', 'Dormir'], answer: 'Gritar mucho' },
    { text: '¿Qué le da miedo a Tanjiro?', options: ['Perder a su hermana', 'Comer dulces', 'Montañas'], answer: 'Perder a su hermana' },
    { text: '¿Cuál es la comida favorita de Zenitsu?', options: ['Curry', 'Ramen', 'Pastel de arroz'], answer: 'Curry' },
    { text: '¿Quién es el Pilar del Fuego?', options: ['Kyojuro Rengoku', 'Giyu Tomioka', 'Shinobu Kocho'], answer: 'Kyojuro Rengoku' },
    { text: '¿Qué le hace sonrojar a Zenitsu?', options: ['Ver chicas lindas', 'Comer ramen', 'Gritar'], answer: 'Ver chicas lindas' },
    { text: '¿Qué animal tiene la máscara de Inosuke?', options: ['Jabalí', 'Lobo', 'Tigre'], answer: 'Jabalí' },
    { text: '¿Cuál es el objetivo principal de los cazadores de demonios?', options: ['Eliminar demonios', 'Cocinar ramen', 'Viajar por el mundo'], answer: 'Eliminar demonios' },
    { text: '¿Qué frase famosa dice Kyojuro Rengoku?', options: ['¡Mueran demonios!', '¡Quien no lucha no merece!', '¡El fuego arde en mi corazón!'], answer: '¡El fuego arde en mi corazón!' },
    { text: '¿Qué elemento caracteriza el estilo de respiración de Inosuke?', options: ['Bestia', 'Agua', 'Luz'], answer: 'Bestia' },
    { text: '¿Qué le gusta hacer a Nezuko para descansar?', options: ['Dormir dentro de la caja', 'Leer manga', 'Cantar'], answer: 'Dormir dentro de la caja' },
    { text: '¿Quién siempre acompaña a Tanjiro?', options: ['Nezuko', 'Kanao', 'Shinobu'], answer: 'Nezuko' },
    { text: '¿Qué demonio tiene habilidades de fuego y combate cuerpo a cuerpo?', options: ['Rengoku', 'Akaza', 'Muzan'], answer: 'Akaza' },
    { text: '¿Qué le hace reír a Zenitsu?', options: ['Cuando alguien se tropieza', 'Comida', 'Peleas'], answer: 'Cuando alguien se tropieza' },
    { text: '¿Cuál es la debilidad principal de los demonios?', options: ['Sol', 'Agua', 'Montañas'], answer: 'Sol' },
    { text: '¿Qué le gusta hacer a Inosuke cuando no pelea?', options: ['Cazar animales', 'Dormir', 'Comer ramen'], answer: 'Cazar animales' },
    { text: '¿Quién enseña la respiración de la abeja?', options: ['Shinobu Kocho', 'Giyu Tomioka', 'Kyojuro Rengoku'], answer: 'Shinobu Kocho' },
    { text: '¿Qué comida le gusta a Nezuko?', options: ['Miel', 'Fruta', 'Ninguna, no come humana'], answer: 'Ninguna, no come humana' },
    { text: '¿Qué personaje es conocido por ser cobarde pero valiente cuando importa?', options: ['Zenitsu', 'Tanjiro', 'Inosuke'], answer: 'Zenitsu' },
    { text: '¿Qué arma usa Shinobu Kocho?', options: ['Espada fina/aguja', 'Katana normal', 'Arco'], answer: 'Espada fina/aguja' },
    { text: '¿Qué animal representa a Kanao Tsuyuri?', options: ['Mariposa', 'Jabalí', 'Gato'], answer: 'Mariposa' },
    { text: 'Si Tanjiro tuviera que comer solo una comida, ¿cuál sería divertida según él?', options: ['Ramen', 'Dango', 'Dulces variados'], answer: 'Dango' },
    { text: '¿Qué estilo de respiración combina con el agua?', options: ['Tanjiro', 'Zenitsu', 'Inosuke'], answer: 'Tanjiro' }
  ];
  questionsFinal: questionsInterface[] = []

  currentQuestion = 0;
  puntajeLocal = 0

  constructor(
    private router: Router,
    public gameCore: GamesCoreService
  ) {
    this.questionsFinal = this.shuffleArray(this.questions).slice(0, 20);
  }
  shuffleArray(array: questionsInterface[]) {
    return array.sort(() => Math.random() - 0.5);
  }
  onAnswerSelected(isCorrect: boolean) {
    if (isCorrect) {
      this.puntajeLocal += 10
    }

    if (this.currentQuestion < this.questionsFinal.length - 1) {
      this.currentQuestion++;
    } else {
      if (this.puntajeLocal > this.gameCore.bestScoreTrivia) {
        this.gameCore.bestScoreTrivia = this.puntajeLocal
      }
      this.gameCore.scoreToShow = this.puntajeLocal;
      this.gameCore.backRouter = '/games/trivia'
      this.router.navigate(['games/score']);
    }
  }

  onTimeUp() {
    this.gameCore.backRouter = '/games/trivia'
    this.router.navigate(['games/score']);
  }

  protected readonly core = core;
}
