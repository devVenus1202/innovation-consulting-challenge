import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

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
