import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ColumnSetting, ColumnMap } from './layout.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'ct-table',
    templateUrl: 'app/shared/table-layout.component.html',
    styleUrls: ['app/shared/table-layout.component.css']
})
export class TableLayoutComponent implements OnInit, OnChanges { 
    @Input() records: any[];
    @Input() caption: string;
    @Input() settings: ColumnSetting[];
    columnMaps: ColumnMap[]; 
    selectedId: number;
    currentUrl;
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }
    ngOnInit() {
    }
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

    select(id: number) {
        this.router.navigate(['../', id], { relativeTo: this.route });
    }
}