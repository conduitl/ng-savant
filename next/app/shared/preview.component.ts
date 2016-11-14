import { Component, Input } from '@angular/core';
@Component({
    selector: 'ct-preview',
    templateUrl: 'app/shared/preview.component.html'
})
export class PreviewComponent {
    @Input() record: any;
}