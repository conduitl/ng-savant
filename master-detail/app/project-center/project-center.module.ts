import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectCenterComponent } from './project-center.component';
import { ProjectService } from './project.service';

import { ProjectRoutingModule } from './project-routing.module';
@NgModule({
    imports: [ 
        SharedModule,
        ProjectRoutingModule
      ],
    declarations: [ ProjectCenterComponent ],
    providers: [ ProjectService ],
    exports: [ ProjectCenterComponent ]
})
export class ProjectCenterModule { }