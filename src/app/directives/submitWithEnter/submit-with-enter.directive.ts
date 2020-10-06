import { Directive, HostListener, Input } from '@angular/core';

const EVENT_KEY = 'Enter'

@Directive({
  selector: '[appSubmitWithEnter]'
})
export class SubmitWithEnterDirective {
  @Input('appSubmitWithEnter') callback: Function;
  
  constructor() {
    
   }


  @HostListener('keydown', ['$event.key'])
  onClick(eventKey) {
    return eventKey === EVENT_KEY ? this.callback() : eventKey;
 }

}
