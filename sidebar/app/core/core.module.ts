import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { MenuComponent } from './menu.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    imports: [ CommonModule, RouterModule ],
    declarations: [ 
        NavbarComponent, 
        MenuComponent,
        NotFoundComponent 
    ],
    exports: [ 
        NavbarComponent,
        MenuComponent
    ],
    providers: []
})
export class CoreModule { }