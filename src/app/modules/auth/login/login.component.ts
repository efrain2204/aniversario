import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  input = new FormControl('');
  openModalLogin  = false

  constructor(private authService:AuthService) {
  }

  ngOnInit() {
    setInterval(this.hearts,300)
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

  modal(){
    this.openModalLogin = !this.openModalLogin;
  }

}
