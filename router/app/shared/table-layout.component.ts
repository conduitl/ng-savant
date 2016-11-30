import { Component, Input, OnChanges } from '@angular/core';
import { ColumnSetting, ColumnMap } from './layout.model';
@Component({
    selector: 'ct-table',
    templateUrl: 'app/shared/table-layout.component.html'
})
export class TableLayoutComponent implements OnChanges { 
    @Input() records: any[];
    @Input() caption: string;
    @Input() settings: ColumnSetting[];
    columnMaps: ColumnMap[]; 
    ngOnChanges() {
        if (this.settings) {
            this.columnMaps = this.settings
                .map( col => new ColumnMap(col) );
        } else {
            this.columnMaps = Object.keys(this.records[0]).map( key => {
                return new ColumnMap( { primaryKey: key });
            });
        }
    }
}