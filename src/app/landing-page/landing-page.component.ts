import { Component, OnInit } from '@angular/core';
import { DomObjectService } from '../services/dom-object.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  isScrolling:boolean = false;
  timeOutObject: any;
  constructor(private domObjectService: DomObjectService) { }

  ngOnInit() {
    this.scroll = this.scroll.bind(this);
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }


  heroSectionInViewPort() {
    let headerSectionDom = this.domObjectService.heroSection.nativeElement
    let top = headerSectionDom.offsetTop;
    let height = headerSectionDom.offsetHeight;
    
    while(headerSectionDom.offsetParent) {
      headerSectionDom = headerSectionDom.offsetParent;
      top += headerSectionDom.offsetTop;
    }
    const headerHeight = 100;
    return (top + height - headerHeight) > window.pageYOffset;
  }
  scroll() {
    window.clearTimeout(this.timeOutObject);
    this.isScrolling = true;
    this.timeOutObject = setTimeout(()=> {
      this.isScrolling = false;
      if (this.heroSectionInViewPort()){
        this.domObjectService.showStickyButton = false;  
      } else {
        this.domObjectService.showStickyButton = true;  
      }
    }, 800);

    if (this.domObjectService.showStickyButton) {
      this.domObjectService.showStickyButton = false;
    }
  }  

}
