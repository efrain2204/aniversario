import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {modelSimpleQuestion} from "../../../shared/popup/popup.component";
import {ImageManager} from "../../../utils/ImageManager";
import {Validators} from "../../../utils/Validators/Validators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  gatosEsperandoIM = new ImageManager([
    'https://media1.tenor.com/m/J2NId9AGVnMAAAAd/%EB%AA%A8%EC%B0%8C-%EB%AA%A8%EB%AA%A8%EC%B0%8C.gif',
    'https://media1.tenor.com/m/giDNGgvic28AAAAd/hi-rawr.gif',
    'https://media.tenor.com/rzbM238OZ7MAAAAi/mochi-cat-chibi-cat.gif',
    'https://media.tenor.com/tdeVEqmiDBAAAAAi/cutie-cat.gif'
  ])

  gatostristesIM = new ImageManager([
    'https://media.tenor.com/vFojGfJgDbgAAAAi/rabbit-bunny.gif',
    'https://media.tenor.com/YgxdehHpC1wAAAAi/very-miss-rabbit.gif',
    'https://media1.tenor.com/m/VRL9uBdvLTMAAAAd/%D1%83%D1%85.gif'
  ])

  nIntentos = 0;
  palabraControl = new FormControl('',[Validators.required]);
  modalVerificarIntentos?: modelSimpleQuestion;
  loaderImg: string | undefined;
  intervalId: any;

  constructor(
    private authService:AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.hearts();
    }, 300);
  }
  ngOnDestroy() {
    // Limpiar el intervalo cuando el componente se destruye
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  hearts(){
    const container = document.querySelector('.containerHeart')!;
    const creat = document.createElement('div')
    const creat2 = document.createElement('div')
    const creat3 = document.createElement('div')
    creat.classList.add('hearts');
    creat2.classList.add('hearts');
    creat3.classList.add('hearts');
    creat.innerHTML =  `❤️`
    creat2.innerHTML =  `🌻`
    creat3.innerHTML =  `🐇`

    creat.style.left = Math.random() * 100 + 'vw';
    creat2.style.left = Math.random() * 100 + 'vw';
    creat3.style.left = Math.random() * 100 + 'vw';
    creat.style.animationDuration = Math.random() * 3 +2 + 's';
    creat2.style.animationDuration = Math.random() * 3 +2 + 's';
    creat3.style.animationDuration = Math.random() * 3 +2 + 's';

    container.appendChild(creat)
    container.appendChild(creat2)
    container.appendChild(creat3)
    setTimeout(()=> {
      creat.remove()
      creat2.remove()
      creat3.remove()
    },3000)
  }

  verificarPalabra(){
    this.nIntentos++
    if(this.nIntentos === 10){
      this.modalVerificarIntentos = {
        question:'Creo que ta malogrado el boton je',
        urlImg: this.gatostristesIM.getRandomImage(),
        button1Text: 'Intentar de nuevo',
        onButton1Click: () => {
          if(this.modalVerificarIntentos){
            this.modalVerificarIntentos.urlImg = this.gatosEsperandoIM.getRandomImage()
            this.modalVerificarIntentos.button1Text = undefined
            this.modalVerificarIntentos.question = `Estoy pensando si la palabra ${this.palabraControl.value ?? ''} es correcta!!`
            this.validateWord(this.palabraControl.value?? '')
          }

        }
      }
    }

  }

  validateWord(value: string){
    this.router.navigate(['/dashboard']);
  }

  closeModalVerificar(){
    this.modalVerificarIntentos = undefined;
    this.nIntentos = 0
  }

}
