import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { MenuComponent } from './menu.component';
import { NotFoundComponent } from './not-found.component';

import { DataSummaryComponent } from './data-summary.component';
import { PreviewComponent } from './preview.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [ CommonModule, AppRoutingModule ],
    declarations: [ 
        NavbarComponent, 
        MenuComponent,
        NotFoundComponent,
        DataSummaryComponent,
        PreviewComponent
    ],
    exports: [ 
        NavbarComponent,
        MenuComponent,
        DataSummaryComponent,
        PreviewComponent,
        AppRoutingModule
    ],
    providers: []
})
export class CoreModule { }