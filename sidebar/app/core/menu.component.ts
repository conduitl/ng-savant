import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ct-menu',
    templateUrl: 'app/core/menu.component.html',
    styleUrls: ['app/core/menu.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MenuComponent { 
    @Output() open = new EventEmitter<boolean>();

    isOpen: boolean = false;

    toggleState(): void {
        let bool = this.isOpen;
        let updatedState = bool === false ? true : false;
        this.isOpen = updatedState;
        this.open.emit(updatedState);
    }
}