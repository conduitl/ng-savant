import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { TableLayoutComponent } from './table-layout.component';
import { PreviewComponent } from './preview.component';
import { FormatCellPipe } from './format-cell.pipe';
import { StyleCellDirective } from './style-cell.directive';
@NgModule({
    imports: [ CommonModule ],
    declarations: [ 
        TableLayoutComponent,
        PreviewComponent,
        FormatCellPipe,
        StyleCellDirective
    ],
    exports: [
        CommonModule, 
        TableLayoutComponent,
        PreviewComponent
    ],
    providers: [ CurrencyPipe ]
})
export class SharedModule { }