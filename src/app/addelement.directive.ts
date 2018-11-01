import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddelement]'
})
export class AddelementDirective  {

  @Input() elementToAdd:string;
  @Input() elementText:string;

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  @HostListener('click') AddelementDirective(){

    const newElement=this.renderer.createElement(this.elementToAdd);
    const text=this.renderer.createText(this.elementText);

    this.renderer.appendChild(newElement,text);

    const pos=this.renderer.selectRootElement('article')
    this.renderer.appendChild(pos,newElement);
  }
    
  

}
