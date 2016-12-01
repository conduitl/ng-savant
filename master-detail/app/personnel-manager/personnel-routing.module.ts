import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonnelManagerComponent } from './personnel-manager.component';

const personnelRoutes: Routes = [
    {
        path: 'personnel',
        children: [
          {
            path: ':id',
            component: PersonnelManagerComponent,
          },
          {
            path: ''
          }
        ]
    },
    {
        path: '',
        redirectTo: '/personnel',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(personnelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonnelRoutingModule { }