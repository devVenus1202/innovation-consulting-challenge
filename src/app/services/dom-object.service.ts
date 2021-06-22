import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomObjectService {
  heroSection: ElementRef;
  showStickyButton: boolean = false;
  constructor() { }
}
