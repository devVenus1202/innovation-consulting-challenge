import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-button',
  templateUrl: './calculate-button.component.html',
  styleUrls: ['./calculate-button.component.scss']
})
export class CalculateButtonComponent implements OnInit {
  @Input() position:string = 'relative';
  constructor() { }

  ngOnInit() {
  }

}
