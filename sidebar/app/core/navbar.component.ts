import { Component } from '@angular/core';

@Component({
    selector: 'ct-navbar',
    templateUrl: 'app/core/navbar.component.html',
    styles: [`
        .blue  a {
            background-color: blue !important;
        }
    `]
})
export class NavbarComponent { }