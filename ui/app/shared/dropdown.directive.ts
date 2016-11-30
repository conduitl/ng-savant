import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[ctDropdown]',
    host: {
        '(keyup.esc)': 'close()',
        '(document:click)': 'closeFromOutsideClick($event)'
    }
})
export class Dropdown {
    private _toggleElement: any;
    private _open = false;
    constructor(elementRef: ElementRef) {
        this.toggleElement = elementRef.nativeElement;
    }
   
    @HostBinding('class.open') get isOpen(): boolean { return this._open; }
    open(): void { 
        if (!this._open) {
            this._open = true;
        }
    }
    close(): void {
        if (this._open) {
            this._open = false;
        }
    }
     @HostListener('click') toggle(): void {
        if (this.isOpen) {
            this.close();
        } else { 
            this.open();
        }
    }
    closeFromOutsideClick($event) {
        if (!this._isEventFromToggle($event)) {
            this.close();
        }
    }
    set toggleElement(toggleElement: any) { 
        this._toggleElement = toggleElement; 
    }
    private _isEventFromToggle($event) { 
        return this._toggleElement.contains($event.target); 
    }
}