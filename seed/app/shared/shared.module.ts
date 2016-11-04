import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableLayoutComponent } from './table-layout.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ TableLayoutComponent ],
    exports: [
        CommonModule, 
        TableLayoutComponent 
    ]
})
export class SharedModule { }