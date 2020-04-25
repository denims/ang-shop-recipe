import { Directive, HostListener, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor() { }

  @HostListener('click') mouseClick(eventData: Event) {
    this.isOpen = !this.isOpen;
  }

}
