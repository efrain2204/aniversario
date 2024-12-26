import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {ImageRendererComponent} from "../image-renderer/image-renderer.component";

export interface imagesMessage {
  url: string;
  message?: string;
}

@Component({
  selector: 'view-gallery',
  standalone: true,
  imports: [CommonModule, ImageRendererComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class ViewGalleryComponent implements OnInit {
  displayedImages: imagesMessage[] = [
    {
      url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184321/assests/gifvrci27yq7dxvensn3.jpg',
      message: 'Aqui esta la imagen donde te veo muy apasianado y sexy, una mirada que me desarma y pone nervioso!'
    },
    {
      url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184319/assests/igvinuttmwo1olx9bprw.jpg',
      message: 'Mira esa manito por encima de mi hombro, ya con esas confianzas? o intuias que seria tuyo? jeje'
    },
    {
      url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184327/assests/wqzvzwnwdfdssxmiimny.jpg',
      message: '¡Eres una persona increíble Amor, la energía que desbordas me impulsa a ser alguien que merezca estar a tu lado, eso me encanta!'
    },
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184320/assests/xuduwewottfclpxvqvgn.jpg',message:"Nuestros pecados bb, comer pero debemos hacer nuestro cardio luego!"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184321/assests/wgjs7wzbtcbtejb3an9o.jpg',message: "una de mis fotos preferidas y que me gustaria esten en mejor calidad ppipipi!"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184323/assests/uppetpfkia5wwleuojsc.jpg',message: "Nuestra primera maratón, fue increible espero se repita!"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184322/assests/p8ubafvvelmf7cdjwtwn.jpg', message: "Luego de nuestra noche de pasión, viene nuestras locuras!"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184325/assests/mom74a5gaepkyjyrgpgh.jpg', message:"El capibara que me demore en conseguirlo, espero te gustara!"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184324/assests/furoyobkwzcd1aejwrto.jpg', message:"Aqui veo a un hombre y a su mujer, que disfrutan su tiempo juntos wiiiiu!"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184324/assests/ytklfkcpst4zwa8j3no3.jpg',message: "Noche mexicana contigo, me encanta todos los planes que hacemos"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184323/assests/vyxbb36aevamixzulatr.jpg', message:"Nuestro primer airBnb, la pasamos increible en todos los aspectos!"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184324/assests/ozx9dfykk5w55bqx16lz.jpg', message:"Nuestra cena romantica! solo pense 'Eres mi razón de ser y mi lugar favorito en el mundo'"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184329/assests/vquffz9bkk7jcycr0f8w.jpg',message:"Mas de nuestra cenita :3"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184327/assests/kgpev6tgwefedeyrlpcc.jpg',message: "Eres el 'para siempre' que nunca creí posible"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184326/assests/vtzwrs06bluyckvgfcnm.jpg',message:"En este caos llamado vida, tú eres mi calma perfecta"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184327/assests/ytljuirq5ionno4v9ddj.jpg',message:"Nuestro retoño, Saltarina!"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184330/assests/okpegbozqewltdesuuif.jpg',message: "Eres mi alma, mi vida, mi todo"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184327/assests/f3nz4jaow3fvkrqgo1qj.jpg', message: "Te amo más allá de todo, más allá de la razón, más allá del corazón"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184325/assests/wrrfudfmz5oy7m37kxos.jpg', message:"Es tu alma la que amo, no tu rostro, no tus palabras, sino todo lo que eres"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184331/assests/ilquwoxz0jh93l5m6bdl.jpg', message:"Amo tu sentido de aventura, eres una chica intrepida y aventurera comparte eso y mucho mas conmigo!"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184327/assests/uze1erppr4kdnakbdyil.jpg', message: "Por ti sería capaz de desafiar al mismo destino"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184334/assests/bqwhcbsdzt4aoyqjnxlx.jpg', message: "Nuestra visita al colca, lugares increibles pocas fotos juntos, eso cambiaremos para nuestro 2025!"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184328/assests/mccwtbmlyijguywppp4s.jpg', message:"Si todo pereciera y tú quedaras, yo seguiría existiendo; y si todo permaneciera y tú desaparecieras, el universo sería extraño para mí"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184319/assests/bmlxnmmoncleszxkdgnd.jpg', message: "Tus palabras son como caricias para mi alma"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184320/assests/bjxgepbo7uu5plfmwx8z.jpg', message: "Foto divertida donde podemos ver la diferencia de tamaño bb!"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184322/assests/k1w0p9w06vdafzmosnnk.jpg', message: "Nuestro viaje a Cuzco, solo puedo repetir en mi mente: 'Mi corazón solo conoce un idioma: el de amarte sin límites'"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184319/assests/drt7n9jbnmgeg5kzcnah.jpg',message: "El chuyo que se perdio, pipipi lo extrañaremos muchoooo!"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184320/assests/ak8f0uqniqipx3nvajke.jpg', message: "Chicos serios captados en camara ! je"},
    {url: 'https://res.cloudinary.com/dzydl81rq/image/upload/v1735184318/assests/i2lj1eon4gqprbglcl9e.png', message: "Si Sofia fuera Efrain y viceversa en versión conejitos jejejeje"}
  ];

  isLoading: boolean[] = [];

  constructor() {
    // Inicializa el estado de carga de cada imagen
    this.isLoading = this.displayedImages.map(() => true);
  }

  onImageLoad(index: number): void {
    this.isLoading[index] = false; // Oculta el cuadro de carga cuando la imagen se carga
  }

  onImageError(index: number): void {
    console.error(`Error al cargar la imagen en el índice ${index}`);
    this.isLoading[index] = false; // Oculta el cuadro de carga incluso si hay un error
  }

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
