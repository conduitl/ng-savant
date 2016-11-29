import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableLayoutComponent } from './table-layout.component';
import { Dropdown } from './dropdown.directive';
import { DisplaySettingsComponent } from './display-settings.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ TableLayoutComponent, Dropdown, DisplaySettingsComponent ],
    exports: [
        CommonModule, 
        TableLayoutComponent,
        Dropdown,
        DisplaySettingsComponent
    ]
})
export class SharedModule { }