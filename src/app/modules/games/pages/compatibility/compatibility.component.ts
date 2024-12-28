import {Component} from '@angular/core';
import {ImageManager} from "../../../../utils/ImageManager";
import {GamesCoreService} from "../../services/games-core.service";
import {questionsInterface} from "../trivia/trivia.component";

@Component({
  selector: 'app-compatibility',
  templateUrl: './compatibility.component.html',
  styleUrls: ['./compatibility.component.scss']
})
export class CompatibilityComponent {

  preguntas: any[] = [
    {
      pregunta: '¿Qué tipo de cita prefiere: una cena elegante o una escapada espontánea?',
      respuestas: ['Cena elegante', 'Escapada espontánea', 'Ambas', 'Ninguna'],
      respuestaCorrecta: 'Escapada espontánea',
    },
    {
      pregunta: '¿Qué le gustaría más como regalo: un reloj clásico o una experiencia extrema como paracaidismo?',
      respuestas: ['Reloj clásico', 'Paracaidismo', 'Ambos', 'Ninguno'],
      respuestaCorrecta: 'Ambos',
    },
    {
      pregunta: '¿Cuál es su postre favorito después de una comida romántica?',
      respuestas: ['Helado', 'Tiramisú', 'Cheesecake', 'Torta helada'],
      respuestaCorrecta: 'Torta helada',
    },
    {
      pregunta: '¿Qué preferiría usar para dormir: pijama completa, ropa cómoda o nada?',
      respuestas: ['Pijama completa', 'Ropa cómoda', 'Nada', 'Depende del clima'],
      respuestaCorrecta: 'Ropa cómoda',
    },
    {
      pregunta: '¿Qué le gustaría más: una tarde de videojuegos juntos o un paseo al aire libre?',
      respuestas: ['Videojuegos', 'Paseo al aire libre', 'Ambos', 'Ninguno'],
      respuestaCorrecta: 'Ambos',
    },
    {
      pregunta: '¿Qué película elegiría para una noche de cine en casa?',
      respuestas: ['Comedia', 'Terror', 'Romántica', 'Ciencia ficción'],
      respuestaCorrecta: 'Romántica',
    },
    {
      pregunta: '¿Cuál es su tipo de música favorita para relajarse?',
      respuestas: ['Jazz', 'Rock', 'Pop', 'Clásica'],
      respuestaCorrecta: 'Jazz',
    },
    {
      pregunta: '¿Qué le gustaría más en un viaje: playa, montaña o ciudad histórica?',
      respuestas: ['Playa', 'Montaña', 'Ciudad histórica', 'Depende del ánimo'],
      respuestaCorrecta: 'Playa',
    },
    {
      pregunta: '¿Qué bebida preferiría para acompañar una cena especial?',
      respuestas: ['Vino tinto', 'Cerveza artesanal', 'Cóctel tropical', 'Agua con gas'],
      respuestaCorrecta: 'Vino tinto',
    },
    {
      pregunta: '¿Qué le gustaría aprender a cocinar juntos?',
      respuestas: ['Pizza artesanal', 'Sushi', 'Postres', 'Platos exóticos'],
      respuestaCorrecta: 'Postres',
    },
    {
      pregunta: '¿Qué prenda cree que se ve mejor en ti?',
      respuestas: ['Camisa elegante', 'Ropa deportiva', 'Jeans y camiseta', 'Un vestido'],
      respuestaCorrecta: 'Un vestido',
    },
    {
      pregunta: '¿Qué tipo de perfume prefiere usar?',
      respuestas: ['Aromas frescos', 'Aromas amaderados', 'Aromas cítricos', 'Nada de perfume'],
      respuestaCorrecta: 'Aromas frescos',
    },
    {
      pregunta: '¿Qué actividad le gustaría probar en pareja?',
      respuestas: ['Escalada', 'Baile', 'Yoga', 'Clases de arte'],
      respuestaCorrecta: 'Baile',
    },
    {
      pregunta: '¿Qué deporte preferiría practicar contigo?',
      respuestas: ['Fútbol', 'Natación', 'Ciclismo', 'Running'],
      respuestaCorrecta: 'Natación',
    },
    {
      pregunta: '¿Qué tipo de película cree que describe mejor su relación?',
      respuestas: ['Comedia romántica', 'Acción', 'Drama', 'Fantasía'],
      respuestaCorrecta: 'Comedia romántica',
    },
    {
      pregunta: '¿Cuál sería su cita perfecta para un aniversario?',
      respuestas: ['Un picnic al atardecer', 'Una cena en un restaurante caro', 'Un viaje corto', 'Un día relajado en casa'],
      respuestaCorrecta: 'Un viaje corto',
    },
    {
      pregunta: '¿Qué tipo de accesorio le gustaría recibir como regalo?',
      respuestas: ['Reloj', 'Pulsera', 'Cadena y anillo', 'todos'],
      respuestaCorrecta: 'todos',
    },
    {
      pregunta: '¿Qué color le parece más atractivo en tu ropa?',
      respuestas: ['Rojo', 'Negro', 'Azul', 'Blanco'],
      respuestaCorrecta: 'Rojo',
    },
    {
      pregunta: '¿Qué preferiría para una escapada rápida?',
      respuestas: ['Un spa relajante', 'Un parque temático', 'Una caminata en el bosque', 'un cuarto para traca-traca'],
      respuestaCorrecta: 'un cuarto para traca-traca',
    },
    {
      pregunta: '¿Qué actividad le gusta más para los días lluviosos?',
      respuestas: ['Ver series', 'Leer un libro', 'Dormir', 'Jugar videojuegos'],
      respuestaCorrecta: 'Ver series',
    },
    {
      pregunta: '¿Qué tipo de baile cree que sería divertido aprender juntos?',
      respuestas: ['Salsa', 'Tango', 'Hip-hop', 'Vals'],
      respuestaCorrecta: 'Salsa',
    },
    {
      pregunta: '¿Qué personaje ficticio le gustaría ser por un día?',
      respuestas: ['Superman', 'James Bond', 'Harry Potter', 'Jon Snow'],
      respuestaCorrecta: 'Jon Snow',
    },
    {
      pregunta: '¿Qué habilidad extraña le gustaría tener?',
      respuestas: ['Hablar con animales', 'Controlar el clima', 'Leer mentes', 'Ser invisible'],
      respuestaCorrecta: 'Hablar con animales',
    },
    {
      pregunta: '¿Qué tipo de fotografía le gustaría tener contigo?',
      respuestas: ['Un retrato profesional', 'Una selfie espontánea', 'Una foto en pareja temática', 'Un recuerdo de viaje'],
      respuestaCorrecta: 'Un recuerdo de viaje',
    },
    {
      pregunta: '¿Qué preferiría desayunar contigo en la cama?',
      respuestas: ['Panqueques', 'Café y tostadas', 'Fruta fresca', 'Nada, no desayuno en cama'],
      respuestaCorrecta: 'Fruta fresca',
    },
    {
      pregunta: '¿Qué le parecería más divertido hacer en pareja: una guerra de almohadas o jugar paintball?',
      respuestas: ['Guerra de almohadas', 'Paintball', 'Ambas', 'Ninguna'],
      respuestaCorrecta: 'Guerra de almohadas',
    },
    {
      pregunta: '¿Qué le gustaría más en una noche especial juntos?',
      respuestas: ['Una cena a la luz de las velas', 'Un baño juntos con velas', 'Bailar lentamente', 'Un juego de seducción'],
      respuestaCorrecta: 'Un baño juntos con velas',
    },
    {
      pregunta: '¿Qué tipo de ropa prefiere que uses en una cita íntima?',
      respuestas: ['Algo elegante', 'Lencería', 'Nada en absoluto', 'Algo casual'],
      respuestaCorrecta: 'Lencería',
    },
    {
      pregunta: '¿Qué lugar fuera de casa le parecería emocionante para una cita privada?',
      respuestas: ['Un hotel boutique', 'Una playa', 'Un auto estacionado', 'Un mirador'],
      respuestaCorrecta: 'Una playa',
    },
    {
      pregunta: '¿Qué le gustaría más experimentar contigo?',
      respuestas: ['Un masaje relajante', 'Un striptease', 'Una ducha juntos', 'Una noche de juegos románticos'],
      respuestaCorrecta: 'Un striptease',
    },
    {
      pregunta: '¿Cuál sería su fantasía más emocionante para explorar juntos?',
      respuestas: ['Un viaje a un lugar exótico', 'Probar algo nuevo en el dormitorio', 'Un disfraz temático', 'Una sesión de fotos privada'],
      respuestaCorrecta: 'Un disfraz temático',
    },
    {
      pregunta: '¿Qué tipo de beso le gusta más recibir de ti?',
      respuestas: ['Suave y lento', 'Apasionado y profundo', 'Rápido y juguetón', 'En el cuello'],
      respuestaCorrecta: 'Apasionado y profundo',
    },
    {
      pregunta: '¿Qué le gustaría escuchar de ti durante un momento íntimo?',
      respuestas: ['Palabras románticas', 'Cumplidos atrevidos', 'Silencio con miradas intensas', 'Risas y bromas'],
      respuestaCorrecta: 'Cumplidos atrevidos',
    },
    {
      pregunta: '¿Qué prenda preferiría quitarte primero en una noche especial?',
      respuestas: ['Zapatos', 'blusa', 'Pantalones', 'Todo a la vez'],
      respuestaCorrecta: 'Todo a la vez',
    },
    {
      pregunta: '¿Qué le gustaría más al final de una cita romántica?',
      respuestas: ['Un abrazo largo', 'Un beso apasionado', 'Un momento de risas', 'Ir directo al dormitorio'],
      respuestaCorrecta: 'Un beso apasionado',
    },
    {
      pregunta: '¿Cuál sería su escenario perfecto para un momento íntimo?',
      respuestas: ['Frente a una chimenea', 'En una cama llena de pétalos', 'En un balcón bajo la luna', 'En una ducha cálida'],
      respuestaCorrecta: 'En una cama llena de pétalos',
    },
    {
      pregunta: '¿Qué tipo de juego en pareja le gustaría intentar?',
      respuestas: ['Roles temáticos', 'Preguntas atrevidas', 'Dados románticos', 'Ropa sorpresa'],
      respuestaCorrecta: 'Dados románticos',
    },
    {
      pregunta: '¿Qué tipo de música prefiere para un momento íntimo?',
      respuestas: ['Jazz suave', 'R&B sensual', 'Pop romántico', 'Silencio absoluto'],
      respuestaCorrecta: 'Jazz suave',
    },
    {
      pregunta: '¿Qué lugar en casa le parecería más emocionante para un momento íntimo?',
      respuestas: ['El dormitorio', 'La sala de estar', 'La cocina', 'El baño'],
      respuestaCorrecta: 'La cocina',
    },
    {
      pregunta: '¿Qué le gustaría más como sorpresa en una noche especial?',
      respuestas: ['Velas y pétalos', 'Un atuendo sexy', 'Una carta romántica', 'Una playlist personalizada'],
      respuestaCorrecta: 'Un atuendo sexy',
    },
  ];
  preguntasFinal: any[] = this.shuffleArray(this.preguntas).slice(0, 10);
  preguntaActual: any = this.preguntasFinal[0];
  compatibilidad: number = 0;
  respuestaCorrecta: number = 0;
  respuestaSeleccionada: boolean = false; // Variable para controlar si ya se ha seleccionado una opción
  respuestaIncorrecta: boolean = false;

  gatitoEstados = new ImageManager([
    'https://media.tenor.com/dYtDxDFaOQgAAAAj/excited-bunny.gif',
    'https://media1.tenor.com/m/AzHfggbIRKgAAAAd/bunny-molang.gif',
    'https://media.tenor.com/2yfLi8XG9aAAAAAj/bunny.gif',
    'https://media.tenor.com/ym2g6Z8R2_0AAAAj/happy-dancing.gif',
    'https://media.tenor.com/rvfhPavhwVMAAAAj/bunny.gif',
    'https://media1.tenor.com/m/0CgCpnXqB20AAAAd/happy-easter-bunny.gif',
    'https://media.tenor.com/13FY2d1wQl8AAAAj/bunny-cute.gif',
    'https://media.tenor.com/_7Sn3RULJwYAAAAj/tkthao219-bunny.gif',
  ])
  urlGatitos = 'https://media.tenor.com/hQ_Uoo3-73MAAAAi/dance-bunny.gif'

  constructor(
    private gameCore: GamesCoreService
  ) {}

  shuffleArray(array:any[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  responder(respuesta: string): void {
    this.urlGatitos = this.gatitoEstados.getRandomImage();
    if (this.respuestaSeleccionada) return; // Si ya se seleccionó una opción, no hacer nada
    this.respuestaSeleccionada = true; // Marcar que se ha seleccionado una opción
    this.respuestaIncorrecta = respuesta !== this.preguntaActual.respuestaCorrecta; // Verificamos si la respuesta es incorrecta

    if (!this.respuestaIncorrecta) {
      this.respuestaCorrecta++;
      this.compatibilidad = Math.round((this.respuestaCorrecta / this.preguntasFinal.length) * 100);
    }

    const siguientePreguntaIndex = this.preguntasFinal.indexOf(this.preguntaActual) + 1;
    if (siguientePreguntaIndex < this.preguntasFinal.length) {
      setTimeout(() => {
        this.preguntaActual = this.preguntasFinal[siguientePreguntaIndex];
        this.respuestaSeleccionada = false; // Permitir seleccionar nueva opción en la siguiente pregunta
      }, 1000); // Un pequeño retraso antes de cambiar la pregunta
    } else {
      alert("Terminaste!")
      this.gameCore.allowCompatibility = this.compatibilidad
    }
  }

}
