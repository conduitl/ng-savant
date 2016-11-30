import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './core/not-found.component';

import { PreviewComponent } from './core/preview.component';
import { DataSummaryComponent } from './core/data-summary.component';

const appRoutes: Routes = [
  { 
      path: 'preview', component: PreviewComponent, outlet: 'panel' 
  },
  { 
      path: 'summary', component: DataSummaryComponent, outlet: 'panel' 
  },
  { 
      path: '', component: DataSummaryComponent, outlet: 'panel' 
  },
  { 
      path: '**', component: NotFoundComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }