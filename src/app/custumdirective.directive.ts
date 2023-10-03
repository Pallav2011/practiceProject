import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustumdirective]'
})
export class CustumdirectiveDirective {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.background = 'yellow';
   }

}
