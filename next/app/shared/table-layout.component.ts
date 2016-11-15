import { Component, Input, OnChanges } from '@angular/core';
import { ColumnSetting, ColumnMap } from './layout.model';
@Component({
    selector: 'ct-table',
    templateUrl: 'app/shared/table-layout.component.html',
    styleUrls: ['app/shared/table-layout.component.css']
})
export class TableLayoutComponent implements OnChanges { 
    @Input() records: any[];
    @Input() caption: string;
    @Input() settings: ColumnSetting[];
    columnMaps: ColumnMap[]; 
    columnStates = [];
    ngOnChanges() {
        if (this.settings) {
            this.columnMaps = this.settings
                .map( col => new ColumnMap(col) );
        } else {
            this.columnMaps = Object.keys(this.records[0]).map( key => {
                return new ColumnMap( { primaryKey: key });
            });
        }
        this.initializeColumnState();
        this.setColumnWidth('missions', 40);
    }
    initializeColumnState() {
        let len = this.columnMaps.length;
        let defaultWidth = 100 / len;
        for (let i = 0; i < len; i++) {
            let column: any = {};
            column.position = i;
            column.name = this.columnMaps[i].header;
            column.width = defaultWidth;
            this.columnStates.push(column);
        }
        console.log('State of columns');
        console.log(this.columnStates);
    }
    setColumnWidth(name: string, width: number) {
        name = name.toLowerCase();
        let defaultWidth =  (100 - width) / (this.columnStates.length - 1);
        for (let column of this.columnStates) { 
            if ( column.name.toLowerCase() === name ) {
                column.width = width;
            } else {
                column.width = defaultWidth;
            }
        }
    }
    logEvent() {
        console.log('dragging');
    } 
} 