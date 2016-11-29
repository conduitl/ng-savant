import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { Collapse } from './collapse';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ NavbarComponent, Collapse ],
    exports: [ NavbarComponent ],
    providers: []
})
export class CoreModule { }