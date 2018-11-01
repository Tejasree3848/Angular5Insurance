import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { overrideComponentView } from '@angular/core/src/view';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseover') over(){
    this.renderer.addClass(this.el.nativeElement,'rotate');
    //this.renderer.setStyle(this.el.nativeElement,'text-decoration','in-line');

    console.log('over called');
    console.log(this.el.nativeElement)
  }


  @HostListener('mouseout') out(){
    this.renderer.removeClass(this.el.nativeElement,'rotate');
  console.log('out called');
  //console.log(this.el.nativeElement)


}
}
