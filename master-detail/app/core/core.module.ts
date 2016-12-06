import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './navbar.component';
import { MenuComponent } from './menu.component';
import { NotFoundComponent } from './not-found.component';

import { DataSummaryComponent } from './data-summary.component';
import { PreviewComponent } from './preview.component';

import { AppRoutingModule } from '../app-routing.module';

/* App-wide services */
import { CurrencyPipe } from '@angular/common';

@NgModule({
    imports: [ CommonModule, SharedModule, AppRoutingModule ],
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
    providers: [CurrencyPipe]
})
export class CoreModule { }