import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'ct-table',
    templateUrl: 'app/shared/table-layout.component.html'
})
export class TableLayoutComponent implements OnChanges { 
    @Input() records: any[];

    ngOnChanges(){
        console.log(this.records);
    }
}