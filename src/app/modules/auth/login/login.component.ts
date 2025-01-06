import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {modelSimpleQuestion} from "../../../shared/popup/popup.component";
import {ImageManager} from "../../../utils/ImageManager";
import {Validators} from "../../../utils/Validators/Validators";
import {Router} from "@angular/router";
import {GamesCoreService} from "../../games/services/games-core.service";

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

  animalesEquivocadosIM = new ImageManager([
    'https://media1.tenor.com/m/p2dGb9NXCzQAAAAd/wrong-trump.gif',
    'https://media1.tenor.com/m/irH4A7_8zNwAAAAd/bduck-duck.gif',
    'https://media1.tenor.com/m/TTZZuSGnYJMAAAAd/that-is-incorrect-emma.gif',
    'https://media.tenor.com/L0HfBttZk9YAAAAj/no-corgi.gif',
    'https://media1.tenor.com/m/DS12iYdLZigAAAAd/kermit-muppets.gif',

  ])

  animalesFelicesIM = new ImageManager([
    'https://media1.tenor.com/m/gotOLnyvy4YAAAAd/bubu-dancing-dance.gif',
    'https://media.tenor.com/-pz0HTTJ7R0AAAAj/elated-yay.gif',
    'https://media.tenor.com/J2j91At15asAAAAj/yay-hooray.gif',
    'https://media.tenor.com/7ri94bWgo7MAAAAj/%E3%82%81%E3%82%8B%E3%82%8B-%E5%AF%86%E6%A1%83%E7%8C%AB.gif',
    'https://media.tenor.com/dYtDxDFaOQgAAAAj/excited-bunny.gif',
    'https://media1.tenor.com/m/oCklf0NyIn4AAAAd/bunny-hey.gif',
    'https://media.tenor.com/5rnOEAtOGwsAAAAj/bunny-impressed.gif',
    'https://media1.tenor.com/m/6Nr_emEMl1cAAAAd/bunny-jumping.gif',
    'https://media.tenor.com/CdZeIRRsn78AAAAj/happy-bunny.gif'

  ])

  gatostristesIM = new ImageManager([
    'https://media.tenor.com/vFojGfJgDbgAAAAi/rabbit-bunny.gif',
    'https://media.tenor.com/YgxdehHpC1wAAAAi/very-miss-rabbit.gif',
    'https://media1.tenor.com/m/VRL9uBdvLTMAAAAd/%D1%83%D1%85.gif'
  ])

  gatosJugandoIM = new ImageManager([
    'https://media.tenor.com/hCe2efigdH0AAAAj/tkthao219-bubududu.gif',
    'https://media.tenor.com/TSESz0xHRPUAAAAj/iklog.gif',
    'https://media.tenor.com/N2oqtqaB_G0AAAAj/peach-goma.gif',
    'https://media.tenor.com/VrwmLrj6zBwAAAAj/peach-and.gif',
    'https://media.tenor.com/CtA9TVdcKGQAAAAj/tkthao219-bubududu.gif'
  ])

  listMagicWord = [
    'Amoreeeeeee',
    'sofia de quiñonez',
    '26 de mayo',
    '26/05/2024',
    'te amo bb',
    'saltarina y godofredo',
    'traca traca todas las noches',
    'mañanero',
    '28/07/1995',
    '12/05/2001'
  ]

  nIntentos = 0;
  palabraControl = new FormControl('',[Validators.required]);
  modalVerificarIntentos?: modelSimpleQuestion;
  loaderImg: string | undefined;
  intervalId: any;
  randomNumber = Math.floor(Math.random() * 3) + 1;

  constructor(
    private authService:AuthService,
    private router: Router,
    private gameCore:GamesCoreService) {
  }

  ngOnInit() {
    this.authService.allowAccess = false;
    this.gameCore.resetValues()
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
    if(this.nIntentos === this.randomNumber){
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
    if(this.palabraControl.value && this.palabraControl.value.length > 0){
      const word = this.palabraControl.value.toLowerCase();
      if(this.listMagicWord.includes(word)){
        if(this.modalVerificarIntentos){
          this.modalVerificarIntentos.urlImg = this.animalesFelicesIM.getRandomImage();
          this.modalVerificarIntentos.question = `Esta palabra -> ${this.palabraControl.value ?? ''} es la correcta!!`
          this.authService.allowAccess = true;
        }
        setTimeout(()=>{
          this.router.navigate(['/dashboard']);
        },5000)

      }else{
        if(this.modalVerificarIntentos){
          this.modalVerificarIntentos.urlImg = this.animalesEquivocadosIM.getRandomImage();
          this.modalVerificarIntentos.question = `Esta palabra -> ${this.palabraControl.value ?? ''} no es la correcta!!`
        }
      }
    }
  }

  closeModalVerificar(){
    this.modalVerificarIntentos = undefined;
    this.nIntentos = 0
  }

  openModalGames(){
    this.modalVerificarIntentos = {
      question: 'Aqui podras jugar algunos juegos que te permitiran saltarte la palabra magica!',
      urlImg: this.gatosJugandoIM.getRandomImage(),
      button1Text: 'Vamos a jugar!',
      onButton1Click: () => {
        this.router.navigate(['/games']);
      }
    }
  }
  openNotes(){
    this.router.navigate(['/notes']);
  }
}
