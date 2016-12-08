import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLayoutComponent } from './table-layout.component';
import { FormatCellPipe } from './format-cell.pipe';
import { StyleCellDirective } from './style-cell.directive';
import { BarChartComponent } from './charts/bar-chart.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ 
        TableLayoutComponent,
        FormatCellPipe,
        StyleCellDirective,
        BarChartComponent
    ],
    exports: [
        CommonModule, 
        TableLayoutComponent,
        FormatCellPipe,
        BarChartComponent
    ]
})
export class SharedModule { }