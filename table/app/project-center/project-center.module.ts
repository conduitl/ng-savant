import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectCenterComponent } from './project-center.component';
import { ProjectService } from './project.service';
@NgModule({
    imports: [ SharedModule ],
    declarations: [ ProjectCenterComponent ],
    providers: [ ProjectService ],
    exports: [ ProjectCenterComponent ]
})
export class ProjectCenterModule { }