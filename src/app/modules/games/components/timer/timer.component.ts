import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() time = 30;
  @Output() timeUp = new EventEmitter<void>();
  timeLeft!: number;
  interval!: any;

  ngOnInit() {
    this.timeLeft = this.time;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.timeUp.emit();
      }
    }, 1000);
  }
}
