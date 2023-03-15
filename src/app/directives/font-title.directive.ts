import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontTitle]'
})
export class FontTitleDirective {

  @Input('appFontTitle') value!: any;

  constructor(
    private renderer: Renderer2,
    private element : ElementRef,
  ) { }

    ngOnInit(): void{
      this.renderer.setStyle(this.element.nativeElement, 'font-size', this.value+'px')
    }

}
