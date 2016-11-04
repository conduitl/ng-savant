import { Component, Input } from '@angular/core';

@Component({
    selector: 'ct-table',
    templateUrl: 'app/shared/table-layout.component.html'
})
export class TableLayoutComponent { 
    @Input() records: any[];
}