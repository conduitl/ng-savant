import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProjectService } from './project.service';
import { ProjectCenterComponent } from './project-center.component';

@NgModule({
    imports: [ SharedModule ],
    declarations: [ ProjectCenterComponent ],
    providers: [ ProjectService ],
    exports: [ ProjectCenterComponent ]
})
export class ProjectCenterModule { }