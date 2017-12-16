

import {Directive,Component,ElementRef,Input} from '@angular/core';


@Directive({
    selector:'common-title',
})

@Component({
    selector:'commonTitle',
    template:`
        <ion-item>
            Hello
        </ion-item>
    `,
    styles:[
        
    ]
})

export class CommonTitleDirective{
    private el:HTMLElement
    @Input('title-name')
    set titleName(titleName:string){
        this.setTitle(titleName);
    }
    constructor(el:ElementRef){
        this.el = el.nativeElement;
        this.setStyle();
        console.log(this.el);
    }
    private setStyle(){
        this.el.style.width = '100%';
        this.el.style.lineHeight = '44px';
    }
    private setTitle(titleName:string){
        // this.el.innerHTML = titleName;
        // this.titleName = titleName;
    }
}