import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor() {
  }

  ngOnInit() {
    setInterval(this.hearts,100)
  }

  hearts(){
    const container = document.querySelector('.containerHeart')!;
    const creat = document.createElement('div')
    creat.classList.add('hearts');
    creat.innerHTML =  `❤️`

    creat.style.left = Math.random() * 100 + 'vw';
    creat.style.animationDuration = Math.random() * 3 +2 + 's';

    container.appendChild(creat)
    setTimeout(()=> {
      creat.remove()
    },3000)
  }
}
