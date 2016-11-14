import { NgModule } from '@angular/core';
import { RouterModule } from'@angular/router';

import { ProjectCenterComponent } from './project-center/project-center.component';
import { PersonnelManagerComponent } from './personnel/personnel-manager.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'projects', component: ProjectCenterComponent },
            { path: 'personnel', component: PersonnelManagerComponent },
            { path: '', redirectTo: 'projects', pathMatch: 'full' }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

