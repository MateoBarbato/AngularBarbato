import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBooleanEstilo]'
})
export class BooleanEstiloDirective {

   @Input('appBooleanEstilo') inscripcionAbierta! : boolean;

  constructor(
    private renderer: Renderer2,
    private element : ElementRef,
    ) { 
    

  }

  ngOnInit() : void {
    this.renderer.setStyle(this.element.nativeElement, 'color', '#ffffff')
    this.renderer.setStyle(this.element.nativeElement, 'padding', '0px 10px 0px 10px')
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '5px')
    this.renderer.setStyle(this.element.nativeElement, 'opacity', '55%')
    this.renderer.setStyle(this.element.nativeElement, 'text-align', 'center')
    this.renderer.setStyle(this.element.nativeElement, 
      'background-color', 
      this.inscripcionAbierta ? '#4caf4f81' : '#f4433681'
      )
  }

}
