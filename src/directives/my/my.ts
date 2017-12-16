import { Directive,Input } from '@angular/core';

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
  @Input('my')
  set my(name:string){
    this.getValue(name);
  }
  constructor() {
    console.log('Hello MyDirective Directive');
  }
  private getValue(name:string){
    console.log(name);
    
  }
}
