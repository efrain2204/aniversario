import {Component, Input, OnInit} from '@angular/core';
import {ImageManager} from "../../../../utils/ImageManager";
import {BehaviorSubject, Subscription} from "rxjs";

@Component({
  selector: 'app-compatibility-bar',
  templateUrl: './compatibility-bar.component.html',
  styleUrls: ['./compatibility-bar.component.scss']
})
export class CompatibilityBarComponent{
  @Input()
  compatibility = 0

  @Input()
  showImg = false;

  @Input()
  imgUrl: string = '';
}
