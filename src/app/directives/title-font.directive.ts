import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitleFont]'
})
export class TitleFontDirective {

  @Input('appTitleFont') value!: number;

  constructor(
    private renderer: Renderer2,
    private element : ElementRef,
    ) { }

    ngOnInit() : void {
      console.log(this.value)
      this.renderer.setStyle(this.element.nativeElement, 'font-size', this.value+'px')
    
    }
}
