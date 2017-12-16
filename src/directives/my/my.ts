import { Directive,Input,ElementRef } from '@angular/core';

/**
 * Generated class for the MyDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[my]' // Attribute selector
})
export class MyDirective {
  private el:HTMLElement;
  @Input('my')
  set my(name:string){
    this.getValue(name);
  }
  constructor(el:ElementRef) {
    this.el = el.nativeElement;
    this.setStyle();
  }
  private setStyle(){
    this.el.style.height = '30px';
    this.el.style.lineHeight = '30px';
    this.el.style.paddingLeft = '15px';
    this.el.style.borderLeft = '5px solid #fe6400';
    this.el.style.fontSize = '18px';
    this.el.style.marginTop = '10px';
  }
  private getValue(name:string){
    console.log(name);
    
  }
}
