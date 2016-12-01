import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProjectCenterComponent } from './project-center.component';
import { ProjectService } from './project.service';
@NgModule({
    imports: [ 
        SharedModule,
        RouterModule.forChild([
            {
                path: 'projects/:id',
                component: ProjectCenterComponent
            },
            {
                path: 'projects',
                redirectTo: 'projects/select',
                pathMatch: 'full'
            }
        ]) 
      ],
    declarations: [ ProjectCenterComponent ],
    providers: [ ProjectService ],
    exports: [ ProjectCenterComponent ]
})
export class ProjectCenterModule { }