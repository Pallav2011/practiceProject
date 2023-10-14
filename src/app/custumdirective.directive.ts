import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustumdirective]'
})
export class CustumdirectiveDirective {

  constructor(private elRef: ElementRef, private renderer:Renderer2) {
    elRef.nativeElement.style.background = 'yellow';

     renderer.setStyle(elRef.nativeElement, 'color','red')
   }

}
