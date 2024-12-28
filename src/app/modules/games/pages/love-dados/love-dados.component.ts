import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {GamesCoreService} from "../../services/games-core.service";

@Component({
  selector: 'app-love-dados',
  templateUrl: './love-dados.component.html',
  styleUrls: ['./love-dados.component.scss']
})
export class LoveDadosComponent {
  actions: string[] = [
    "Besar apasionadamente",
    "Abrazar por la cintura",
    "Susurrar al oído",
    "Hacer masajes sensuales",
    "Jugar con los dedos",
    "Deslizar los labios suavemente",
    "Mordisquear el cuello",
    "Cerrar los ojos y acariciar",
    "Sentir la respiración cercana",
    "Rozar lentamente las manos",
    "Desatar fantasías",
    "Dar un leve tirón de cabello",
    "Jugar a tocar y detenerse",
    "Bailar muy juntos",
    "Experimentar con hielo",
    "Dibujar corazones en la piel",
    "Escribir poemas",
    "Preparar una cena juntos",
    "Mirar las estrellas",
    "Hacer una lista de deseos",
    "Recordar la primera cita",
    "Bailar sin música",
    "Planear una escapada",
    "Jugar a las escondidas románticas",
    "Leer un libro en voz alta",
    "Hacer una cápsula del tiempo",
    "Pasear de la mano",
    "Cocinar el postre favorito",
    "Susurrar cumplidos",
    "Hacer promesas tiernas",
    "Tomar un baño juntos",
    "Dar abrazos interminables"
  ];

  places: string[] = [
    "En la cama",
    "En la ducha",
    "En el sofá",
    "En el balcón",
    "Frente al espejo",
    "En el coche",
    "En la cocina",
    "Sobre la mesa",
    "En una silla",
    "En un rincón oscuro",
    "En el jardín",
    "En el vestidor",
    "Al lado de la chimenea",
    "Bajo la lluvia",
    "En una tienda de campaña",
    "Frente a una ventana",
    "En la playa",
    "En un parque",
    "En una cabaña",
    "En una terraza",
    "En un restaurante elegante",
    "En una librería",
    "En una cafetería",
    "En un cine",
    "En una biblioteca",
    "En un campo abierto",
    "En un hotel boutique",
    "En un avión",
    "En un tren",
    "En un picnic",
    "En una montaña"
  ];

  actionDice: string = '';
  placeDice: string = '';
  isRolling: boolean = false;
  wordMagic = new FormControl('')

  constructor(private gameCore: GamesCoreService) {
  }

  rollDice() {
    this.isRolling = true;

    setTimeout(() => {
      this.actionDice = this.actions[Math.floor(Math.random() * this.actions.length)];
      this.placeDice = this.places[Math.floor(Math.random() * this.places.length)];
      this.isRolling = false;
    }, 1000); // Duración de la animación 1 segundo
  }

  passDados() {
    if (this.wordMagic.value === 'efrain2204') {
      this.gameCore.allowDados = true;
    } else {
      alert("Palabra incorrecta!")
    }
  }
}
