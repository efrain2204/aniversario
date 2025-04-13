import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {GamesCoreService} from "../../services/games-core.service";

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef?: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D | null = null;
  options = [
    'Besito',
    'Cartita',
    'Chocolatito',
    'Traca-Traca',
  ];
  startAngle = 0;
  arc = Math.PI / (this.options.length / 2);
  spinTime = 0;
  spinAngleStart = Math.random() * 10 + 10;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  spinTimeout = -1;
  selected = '';
  size = 320;

  newWord = new FormControl('');

  constructor(private coreGame: GamesCoreService) {
  }

  ngAfterViewInit(): void {
    this.drawRouletteWheel();
  }

  ngOnInit(): void {
  }

  get canvas(): HTMLCanvasElement {
    return this.canvasRef!.nativeElement;
  }

  drawRouletteWheel() {
    if (this.canvas) {
      var outsideRadius = 100;
      var textRadius = 80;
      var insideRadius = 60;

      this.ctx = this.canvas.getContext('2d');
      if (this.ctx != null) {
        this.ctx.clearRect(0, 0, this.size, this.size);

        this.ctx.strokeStyle = '#999';
        this.ctx.lineWidth = 2;

        this.ctx.font = 'bold 13px Helvetica, Arial';

        for (var i = 0; i < this.options.length; i++) {
          var angle = this.startAngle + i * this.arc;
          //ctx.fillStyle = colors[i];
          this.ctx.fillStyle = this.getColor(i, this.options.length);

          this.ctx.beginPath();
          this.ctx.arc(
            this.size / 2,
            this.size / 2,
            outsideRadius,
            angle,
            angle + this.arc,
            false
          );
          this.ctx.arc(
            this.size / 2,
            this.size / 2,
            insideRadius,
            angle + this.arc,
            angle,
            true
          );
          this.ctx.stroke();
          this.ctx.fill();

          this.ctx.save();
          this.ctx.shadowOffsetX = -1;
          this.ctx.shadowOffsetY = -2;
          this.ctx.shadowBlur = 5;
          this.ctx.shadowColor = '#fff';
          this.ctx.fillStyle = '#222';
          this.ctx.translate(
            160 + Math.cos(angle + this.arc / 2) * textRadius,
            160 + Math.sin(angle + this.arc / 2) * textRadius
          );
          this.ctx.rotate(angle + this.arc / 2 + Math.PI / 2);
          var text = this.options[i];
          this.ctx.fillText(text, -this.ctx.measureText(text).width / 2, 0);
          this.ctx.restore();
        }

        //Arrow

        //shadow
        this.ctx.fillStyle = '#fff';
        this.ctx.beginPath();
        const shadowDeslocX = -2;
        const shadowDeslocY = -1;
        this.ctx.moveTo(
          this.size / 2 - 4 + shadowDeslocX,
          this.size / 2 - (outsideRadius + 10 + shadowDeslocY)
        );
        this.ctx.lineTo(
          this.size / 2 + 4 + shadowDeslocX,
          this.size / 2 - (outsideRadius + 10 + shadowDeslocY)
        );
        this.ctx.lineTo(
          this.size / 2 + 4 + shadowDeslocX,
          this.size / 2 - (outsideRadius - 0 + shadowDeslocY)
        );
        this.ctx.lineTo(
          this.size / 2 + 9 + shadowDeslocX,
          this.size / 2 - (outsideRadius - 0 + shadowDeslocY)
        );
        this.ctx.lineTo(
          this.size / 2 + 0 + shadowDeslocX,
          this.size / 2 - (outsideRadius - 8 + shadowDeslocY)
        );
        this.ctx.lineTo(
          this.size / 2 - 9 + shadowDeslocX,
          this.size / 2 - (outsideRadius - 0 + shadowDeslocY)
        );
        this.ctx.lineTo(
          this.size / 2 - 4 + shadowDeslocX,
          this.size / 2 - (outsideRadius - 0 + shadowDeslocY)
        );
        this.ctx.lineTo(
          this.size / 2 - 4 + shadowDeslocX,
          this.size / 2 - (outsideRadius + 10 + shadowDeslocY)
        );
        this.ctx.fill();

        //arrow
        this.ctx.fillStyle = '#222';
        this.ctx.beginPath();
        this.ctx.moveTo(this.size / 2 - 4, this.size / 2 - (outsideRadius + 10));
        this.ctx.lineTo(this.size / 2 + 4, this.size / 2 - (outsideRadius + 10));
        this.ctx.lineTo(this.size / 2 + 4, this.size / 2 - (outsideRadius - 0));
        this.ctx.lineTo(this.size / 2 + 9, this.size / 2 - (outsideRadius - 0));
        this.ctx.lineTo(this.size / 2 + 0, this.size / 2 - (outsideRadius - 8));
        this.ctx.lineTo(this.size / 2 - 9, this.size / 2 - (outsideRadius - 0));
        this.ctx.lineTo(this.size / 2 - 4, this.size / 2 - (outsideRadius - 0));
        this.ctx.lineTo(this.size / 2 - 4, this.size / 2 - (outsideRadius + 10));
        this.ctx.fill();
      }
    }
  }

  getColor(item: number, maxitem: number) {
    var phase = 0;
    var center = 128;
    var width = 127;
    var frequency = (Math.PI * 2) / maxitem;

    const red = Math.sin(frequency * item + 2 + phase) * width + center;
    const green = Math.sin(frequency * item + 0 + phase) * width + center;
    const blue = Math.sin(frequency * item + 4 + phase) * width + center;

    return this.RGB2Color(red, green, blue);
  }

  RGB2Color(r: number, g: number, b: number) {
    return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
  }

  byte2Hex(n: number) {
    var nybHexString = '0123456789ABCDEF';
    return (
      String(nybHexString.substring((n >> 4) & 0x0f, 1 + ((n >> 4) & 0x0f))) +
      nybHexString.substring(n & 0x0f, 1 + (n & 0x0f))
    );
  }

  spin() {
    this.spinAngleStart = Math.random() * 10 + 10;
    this.spinTime = 0;
    this.spinTimeTotal = Math.random() * 3 + 4 * 1000;
    this.rotateWheel();
  }

  rotateWheel() {
    this.spinTime += 20;
    if (this.spinTime >= this.spinTimeTotal) {
      this.stopRotateWheel();
      return;
    }
    let spinAngle =
      this.spinAngleStart -
      this.easeOut(this.spinTime, 0, this.spinAngleStart, this.spinTimeTotal);
    this.startAngle += (spinAngle * Math.PI) / 180;
    this.drawRouletteWheel();
    // @ts-ignore
    this.spinTimeout = setTimeout(() => this.rotateWheel(), 30);
  }

  stopRotateWheel() {
    clearTimeout(this.spinTimeout);
    let degrees = (this.startAngle * 180) / Math.PI + 90;
    let arcd = (this.arc * 180) / Math.PI;
    let index = Math.floor((360 - (degrees % 360)) / arcd);
    if (this.ctx) {
      this.ctx.save();
      this.ctx.font = 'bold 30px Helvetica, Arial';
      const text = this.options[index];
      this.selected = text;
      this.ctx.fillText(
        text,
        this.size / 2 - this.ctx.measureText(text).width / 2,
        this.size / 2 + 150
      );
      this.ctx.restore();
    }
    this.coreGame.allowRoulette = this.selected === 'WIN';
  }

  easeOut(t: number, b: number, c: number, d: number) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }

  redibujar(){
    this.arc = Math.PI / (this.options.length / 2);
    this.drawRouletteWheel()
  }

  word(mode : 'add' | 'delete') {
    const word = this.newWord.getRawValue()
    if(word && word.length > 1 && mode == 'add') {
      this.options.push(word);
      this.newWord.setValue('');
      this.redibujar()
    }else if(this.options.length > 2 && mode == 'delete') {
      this.options.pop();
      this.redibujar()
    }
  }

}
