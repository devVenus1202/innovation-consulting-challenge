import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomObjectService } from 'src/app/services/dom-object.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('heroSection', {read: ElementRef, static:false }) heroSection: ElementRef;
  constructor(private domObjectService: DomObjectService) { }

  ngAfterViewInit() {
    this.domObjectService.heroSection = this.heroSection;
  }

}
