import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent implements OnInit {
  @Input() backgroundColor:string;

  constructor() { }

  ngOnInit() {
  }

}
