import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProjectCenterComponent } from './project-center.component';

@NgModule({
    imports: [ SharedModule ],
    declarations: [ ProjectCenterComponent ],
    providers: [],
    exports: [ ProjectCenterComponent ]
})
export class ProjectCenterModule { }