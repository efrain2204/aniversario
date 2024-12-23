import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";

export interface imagesMessage {
  url: string;
  message?: string;
}

@Component({
  selector: 'view-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class ViewGalleryComponent implements OnInit {
  displayedImages: imagesMessage[] = [
    {
      url: 'assets/images/foto1.jpg',
      message: 'Aqui esta la imagen donde te veo muy apasianado y sexy, una mirada que me desarma y pone nervioso!'
    },
    {
      url: 'assets/images/foto2.jpg',
      message: 'Mira esa manito por encima de mi hombre, ya con esas confianzas? o intuias que seria tuyo? jeje'
    },
    {
      url: 'assets/images/foto3.jpg',
      message: '¡Eres una persona increíble Amor, la energía que desbordas me impulsa a ser alguien que merezca estar a tu lado, eso me encanta!'
    },
    {url: 'assets/images/foto4.jpg',message:"Nuestros pecados bb, comer pero debemos hacer nuestro cardio luego!"},
    {url: 'assets/images/foto5.jpg',message: "una de mis fotos preferidas y que me gustaria esten en mejor calidad ppipipi!"},
    {url: 'assets/images/foto6.jpg',message: "Nuestra primera maratón, fue increible espero se repita!"},
    {url: 'assets/images/foto7.jpg', message: "Luego de nuestra noche de pasión, viene nuestras locuras!"},
    {url: 'assets/images/foto8.jpg', message:"El capibara que me demore en conseguirlo, espero te gustara!"},
    {url: 'assets/images/foto9.jpg', message:"Aqui veo a un hombre y a su mujer, que disfrutan su tiempo juntos wiiiiu!"},
    {url: 'assets/images/foto10.jpg',message: "Noche mexicana contigo, me encanta todos los planes que hacemos"},
    {url: 'assets/images/foto11.jpg', message:"Nuestro primer airBnb, la pasamos increible en todos los aspectos!"},
    {url: 'assets/images/foto12.jpg', message:"Nuestra cena romantica! solo pense 'Eres mi razón de ser y mi lugar favorito en el mundo'"},
    {url: 'assets/images/foto13.jpg',message:"Mas de nuestra cenita :3"},
    {url: 'assets/images/foto14.jpg',message: "Eres el 'para siempre' que nunca creí posible"},
    {url: 'assets/images/foto15.jpg',message:"En este caos llamado vida, tú eres mi calma perfecta"},
    {url: 'assets/images/foto16.jpg',message:"Nuestro retoño, Saltarina!"},
    {url: 'assets/images/foto17.jpg',message: "Eres mi alma, mi vida, mi todo"},
    {url: 'assets/images/foto18.jpg', message: "Te amo más allá de todo, más allá de la razón, más allá del corazón"},
    {url: 'assets/images/foto19.jpg', message:"Es tu alma la que amo, no tu rostro, no tus palabras, sino todo lo que eres"},
    {url: 'assets/images/foto20.jpg', message:"Amo tu sentido de aventura, eres una chica intrepida y aventurera comparte eso y mucho mas conmigo!"},
    {url: 'assets/images/foto21.jpg', message: "Por ti sería capaz de desafiar al mismo destino"},
    {url: 'assets/images/foto22.jpg', message: "Nuestra visita al colca, lugares increibles pocas fotos juntos, eso cambiaremos para nuestro 2025!"},
    {url: 'assets/images/foto23.jpg', message:"Si todo pereciera y tú quedaras, yo seguiría existiendo; y si todo permaneciera y tú desaparecieras, el universo sería extraño para mí"},
    {url: 'assets/images/foto24.jpg', message: "Tus palabras son como caricias para mi alma"},
    {url: 'assets/images/foto25.jpg', message: "Foto divertida donde podemos ver la diferencia de tamaño bb!"},
    {url: 'assets/images/foto26.jpg', message: "Nuestro viaje a Cuzco, solo puedo repetir en mi mente: 'Mi corazón solo conoce un idioma: el de amarte sin límites'"},
    {url: 'assets/images/foto27.jpg',message: "El chuyo que se perdio, pipipi lo extrañaremos muchoooo!"},
    {url: 'assets/images/foto28.jpg', message: "Chicos serios captados en camara ! je"},
    {url: 'assets/images/pareja.png', message: "Si Sofia fuera Efrain y viceversa en versión conejitos jejejeje"}
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

  openModal(imageSrc: imagesMessage): void {
    const modal = document.getElementById('myModal') as HTMLElement;
    const modalImg = document.getElementById('modal-img') as HTMLImageElement;
    const modalMsg = document.getElementById('modal-msg') as HTMLElement;
    modalImg.src = imageSrc.url;
    if (imageSrc.message)
      modalMsg.innerText = imageSrc.message;
    else {
      modalMsg.innerText = '';
    }
    modal.style.display = 'flex'; // Muestra el modal
  }

  closeModal(): void {
    const modal = document.getElementById('myModal') as HTMLElement;
    modal.style.display = 'none'; // Oculta el modal
  }


}
