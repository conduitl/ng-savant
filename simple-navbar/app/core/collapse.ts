import { Directive, Input, ElementRef, Renderer, OnChanges, OnInit } from '@angular/core';

@Directive({
    selector: '[ctCollapse]'
})
export class Collapse implements OnChanges {
    @Input() ctCollapse: boolean;
    constructor(
        private el: ElementRef,
        private renderer: Renderer
    ){}
    expandedHeight: number;
    ngOnInit(){
        this.initializeHeight();
    }
    ngOnChanges(){
        let height = this.el.nativeElement.offsetHeight; 
        let pts = this.setEndPoints('0', height + 'px', this.ctCollapse);
        console.log(pts);

        this.toggleClass('collapsing', true);
        
        if (this.ctCollapse) {
            this.toggleClass('in', true);
        } 
        
        this.setHeight(pts[0]);
        
        setTimeout( () => {
            this.setHeight(pts[1]);
        }, 1)
        
        setTimeout( ()=> {
            this.toggleClass('collapsing', false);
            if (!this.ctCollapse) {
                this.toggleClass('in', false);
            } 
            this.setHeight(null);
        }, 350);
    }
    initializeHeight() {
        this.toggleClass('in', true);
        let task; 
        task = (function() {
                return () => {
                     this.toggleClass('in', true);
                };
            })();
        task();
        // let tasks = [
        //     (function() {
        //         return () => {
        //              this.toggleClass('in', true);
        //             next() 
        //         };
        //     })(),
        //     (function() {
        //         return () => {
        //             console.log('Initialized height: ' + this.expandedHeight);
        //             next() 
        //         };
        //     })(),
        //     (function() {
        //         return () => {
        //             this.toggleClass('in', false);
        //             next() 
        //         };
        //     })()
        // ];
        // next();
        // function next(){
        //     if (tasks.length > 0) {
        //         let task = tasks.shift();
        //         task();
        //     }
        // }
    }
    setEndPoints(min, max, bool) {
        if (bool) {
            return [min, max];
        }
        return [max, min];
    }
    toggleClass(name: string, bool: boolean){
        this.renderer.setElementClass( 
            this.el.nativeElement, 
            name, 
            bool
        );
    }
    setHeight(val: string) {
        this.renderer.setElementStyle(
            this.el.nativeElement,
            'height',
            val
        )
    }
}