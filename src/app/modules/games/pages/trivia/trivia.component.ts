import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {GamesCoreService} from "../../services/games-core.service";
import {core} from "@angular/compiler";

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

  questions:questionsInterface[] = [
    {text: '¿Qué superpoder le gustaría tener a Efrain?', options: ['Comer y no engordar', 'Volar', 'Coger con su amada dia/noche sin parar xd'], answer: 'Comer y no engordar'},
    {text: 'Si Efra seria un animal, ¿cuál sería?', options: ['León', 'Gato', 'Pingüino','Hamster'], answer: 'Pingüino'},
    {text: 'Si Efra pudiera cenar con una celebridad, ¿quién sería?', options: ['Emily', 'Keanu Reeves', 'Dwayne Johnson','Alan Garcia'], answer: 'Emily'},
    {text: '¿Qué haría Efrain si ganara la lotería?', options: ['Viajar por el mundo', 'Comprar una isla', 'Iniciar una startup','Alquilar 365 dias un hotel para el traca-traca'], answer: 'Viajar por el mundo'},
    {text: '¿Cuál es el mayor miedo de Efra?', options: ['Arañas', 'Alturas', 'Hablar en público','tripofobia'], answer: 'tripofobia'},
    {text: '¿Qué haría Efra si se despierta con el cuerpo de la persona que más odia?', options: ['Lo disfruto', 'Lo trato de cambiar', 'Hago todo lo contrario a lo que haría esa persona','se deniega de la vida'], answer: 'se deniega de la vida'},
    {text: '¿Qué haría Efra si pudiera estar invisible por un día?', options: ['Espiar a su bb', 'Hacer travesuras', 'Ir a lugares restringidos'], answer: 'Espiar a su bb'},
    {text: 'Si Efra pudiera intercambiar vidas con alguien por un día, ¿quién sería?', options: ['El presidente', 'Su mejor amigo', 'Una persona millonaria', 'Un pato'], answer: 'Un pato'},
    {text: 'Si Efra fuera un superhéroe, ¿cuál sería tu debilidad?', options: ['El chocolate', 'Las bromas pesadas', 'Las mascotas','La gripe'], answer: 'La gripe'},
    {text: 'Si Efra fuera un villano, ¿cuál sería su plan maestro?', options: ['Robar todos los relojes', 'Causar caos en las redes sociales', 'Convertir el agua en vino','Emborrachar a su amada'], answer: 'Emborrachar a su amada'},
    {text: 'Si Efra pudiera vivir en una película, ¿en cuál sería?', options: ['The Matrix', 'El Señor de los Anillos', 'Harry Potter','Star Wars'], answer: 'Star Wars'},
    {text: '¿Cuál es el río más largo del mundo?', options: ['Nilo', 'Amazonas', 'Yangtsé'], answer: 'Amazonas'},
    {text: '¿Qué país tiene la mayor población del mundo?', options: ['India', 'China', 'EE. UU.'], answer: 'China'},
    {text: '¿Quién escribió "Cien años de soledad"?', options: ['Pablo Neruda', 'Gabriel García Márquez', 'Mario Vargas Llosa'], answer: 'Gabriel García Márquez'},
    {text: '¿Qué invento se le atribuye a Alexander Graham Bell?', options: ['El teléfono', 'La bombilla', 'La radio'], answer: 'El teléfono'},
    {text: '¿Cuál es el continente más grande?', options: ['Asia', 'África', 'América'], answer: 'Asia'},
    {text: '¿Qué planeta es conocido como el "Planeta Rojo"?', options: ['Marte', 'Júpiter', 'Saturno'], answer: 'Marte'},
    {text: '¿Qué es el Big Bang?', options: ['Una teoría sobre el origen del universo', 'Un tipo de explosión en la Tierra', 'Un movimiento cultural'], answer: 'Una teoría sobre el origen del universo'},
    {text: '¿En qué año llegó el hombre a la luna?', options: ['1969', '1959', '1979'], answer: '1969'},
    {text: '¿Cuál es el símbolo químico del oro?', options: ['Au', 'Ag', 'O'], answer: 'Au'},
    {text: '¿Cuántos continentes hay en el mundo?', options: ['5', '6', '7'], answer: '7'},
    {text: '¿Qué es un triángulo equilátero?', options: ['Un triángulo con lados desiguales', 'Un triángulo con todos sus ángulos iguales', 'Un triángulo con todos sus lados iguales'], answer: 'Un triángulo con todos sus lados iguales'},
    {text: '¿Cuántos estados tiene Estados Unidos?', options: ['50', '51', '52'], answer: '50'},
    {text: '¿Qué océano es el más grande?', options: ['Atlántico', 'Pacífico', 'Índico'], answer: 'Pacífico'},
    {text: 'Si 5 manzanas cuestan $10, ¿cuánto costarían 15 manzanas?', options: ['$30', '$25', '$50'], answer: '$30'},
    {text: 'Si un tren viaja a 60 km/h durante 2 horas, ¿cuántos kilómetros recorre?', options: ['100 km', '120 km', '150 km'], answer: '120 km'},
    {text: 'En una caja hay 3 manzanas y tú tomas 2. ¿Cuántas manzanas tienes?', options: ['1', '2', '3'], answer: '2'},
    {text: 'Si María tiene el doble de edad que Juan y Juan tiene 12 años, ¿cuántos años tiene María?', options: ['24 años', '18 años', '12 años'], answer: '24 años'},
    {text: 'Si en una granja hay 10 gallinas y cada gallina pone un huevo al día, ¿cuántos huevos se pondrán en 5 días?', options: ['50', '30', '10'], answer: '50'},
    {text: '¿Qué gas respiramos principalmente?', options: ['Oxígeno', 'Nitrógeno', 'Dióxido de carbono'], answer: 'Oxígeno'},
    {text: '¿Cuál es el número romano para el 10?', options: ['X', 'V', 'IX'], answer: 'X'},
    {text: 'Si un objeto pesa 10 kg en la Tierra, ¿cuánto pesaría en la Luna?', options: ['5 kg', '10 kg', '15 kg'], answer: '5 kg'},
  ];
  questionsFinal:questionsInterface[] = []

  currentQuestion = 0;
  puntajeLocal = 0

  constructor(
    private router: Router,
    public gameCore: GamesCoreService
  ) {
    this.questionsFinal = this.shuffleArray(this.questions).slice(0, 10);
  }
  shuffleArray(array:questionsInterface[]) {
    return array.sort(() => Math.random() - 0.5);
  }
  onAnswerSelected(isCorrect: boolean) {
    if (isCorrect) {
      this.puntajeLocal+= 10
    }

    if (this.currentQuestion < this.questionsFinal.length - 1) {
      this.currentQuestion++;
    } else {
      if(this.puntajeLocal> this.gameCore.bestScoreTrivia){
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
