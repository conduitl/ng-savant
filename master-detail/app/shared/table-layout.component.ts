import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ColumnSetting, ColumnMap } from './layout.model';
import { Router, ActivatedRoute, Params, ActivatedRouteSnapshot } from '@angular/router';
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
    initializedFeatureState: ActivatedRouteSnapshot;
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}
    ngOnInit() {
       this.initializedFeatureState = this.route.root.firstChild.snapshot;
       console.log(this.initializedFeatureState);
       this.route.params.subscribe( (params: Params) => this.selectedId = +params['id']);
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
        let featureUrlFragment = this.initializedFeatureState.url[0].path;
        console.log('Feature url');
        console.log(featureUrlFragment); 
        this.router.navigate(['../', id, { feature: featureUrlFragment }], { relativeTo: this.route });
    }
}