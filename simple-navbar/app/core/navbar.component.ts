import { Component } from '@angular/core';

@Component({
    selector: 'ct-navbar',
    templateUrl: 'app/core/navbar.component.html'
})
export class NavbarComponent {
    isIn = false;
    toggleState() {
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }
}