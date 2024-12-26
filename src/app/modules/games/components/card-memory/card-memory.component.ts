import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'card-memory',
  templateUrl: './card-memory.component.html',
  styleUrls: ['./card-memory.component.scss']
})
export class CardMemoryComponent {
  @Input() card!: { id: number; image: string };
  @Input() flipped = false;
  @Output() cardClicked = new EventEmitter<void>();
}
