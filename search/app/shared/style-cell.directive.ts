import { Directive, ElementRef, 
         Input, Renderer, OnInit } from '@angular/core';
@Directive({ selector: '[ctStyleCell]'})
export class StyleCellDirective implements OnInit {
    @Input() ctStyleCell: string;
    constructor(
       private el: ElementRef, 
       private renderer: Renderer) { }
    ngOnInit() {
        if (this.ctStyleCell === undefined) {
            this.renderer.setElementStyle(
                 this.el.nativeElement, 
                 'color', 
                 '#dcdcdc');
            this.renderer.setElementStyle(
                 this.el.nativeElement, 
                 'text-align', 
                 'center');
        }
        if (typeof this.ctStyleCell === 'number') {
            this.renderer.setElementStyle(
                 this.el.nativeElement, 
                 'text-align', 
                 'right');
        }
    }
}