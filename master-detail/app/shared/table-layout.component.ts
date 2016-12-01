import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ColumnSetting, ColumnMap } from './layout.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
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
    idFromRoute: number;
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}
    ngOnInit() {
        // get route params
        // this.route.params.forEach( (params: Params) => {

        // })
        console.log('Reload');
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
        let currentId = +this.route.snapshot.params['id'];
        this.selectedId = id;
        this.router.navigate(['../', id], { relativeTo: this.route });
    }
}