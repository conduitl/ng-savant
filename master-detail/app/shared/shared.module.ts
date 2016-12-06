import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLayoutComponent } from './table-layout.component';
import { FormatCellPipe } from './format-cell.pipe';
import { StyleCellDirective } from './style-cell.directive';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ 
        TableLayoutComponent,
        FormatCellPipe,
        StyleCellDirective
    ],
    exports: [
        CommonModule, 
        TableLayoutComponent,
        FormatCellPipe
    ]
})
export class SharedModule { }