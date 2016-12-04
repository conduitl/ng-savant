import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectCenterComponent } from './project-center.component';

const projectRoutes: Routes = [
    {
        path: 'projects',
        children: [
            {
                path: ':id',
                component: ProjectCenterComponent
            },
            {
                path: '',
                redirectTo: 'select',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(projectRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProjectRoutingModule{ }