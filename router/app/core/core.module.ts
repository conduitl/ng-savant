import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    imports: [ CommonModule, RouterModule ],
    declarations: [ NavbarComponent, NotFoundComponent ],
    exports: [ NavbarComponent ],
    providers: []
})
export class CoreModule { }