

import {Directive, ElementRef,Input} from "@angular/core";
import {AppConfig} from '../../app/app.config';

@Directive({
  selector:'[setheight]'
})
/**
 *  根据屏幕宽度动态设定元素的高度
 */
export class SetHeightDirective{
  private _defaultMultiple = 1;
  private _bodyWidth = AppConfig.getWindowWidth();
  private el:HTMLElement;

  @Input('setheight')
  set height(_multiple:number){
    this.setHeight(_multiple);
  }
  constructor(el:ElementRef){
      this.el = el.nativeElement;
      this.setHeight(this._defaultMultiple);      
  }

  private setHeight(_multiple:number){
    this.el.style.height = _multiple*this._bodyWidth +'px';
  }
}
