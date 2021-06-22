import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomObjectService } from 'src/app/services/dom-object.service';
@Component({
  selector: 'app-calculate-button',
  templateUrl: './calculate-button.component.html',
  styleUrls: ['./calculate-button.component.scss'], 
  animations: [
    trigger('showHide', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({visibility:'visible', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({visibility:'hidden', opacity: 0 }))
      ])
    ]),
  ],
})
export class CalculateButtonComponent implements AfterViewInit {
  @Input() position:string = 'relative';
  constructor(public domObjectService: DomObjectService) {  }
  ngAfterViewInit() {
  }
  
  handleClick(){
    alert("Cliced button");
  }
}
