import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ColumnSetting, ColumnMap } from './layout.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/pluck';
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
    currentPath;
    parentPath;
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}
    ngOnInit() {
       console.log('TableLayout initialized');
       this.route.params.subscribe( (params: Params) => {
           console.log('Params found from table layout');
           console.log( params );
           this.selectedId = +params['id']
       });
       this.parentPath = this.route.parent.snapshot.url[0].path;
       this.route.url.subscribe( u => {
           this.currentPath = u[0].path;
       });
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