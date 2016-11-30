import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { ProjectCenterModule } from './project-center/project-center.module';
import { PersonnelManagerModule } from './personnel-manager/personnel-manager.module';

import { AppComponent }   from './app.component';
@NgModule({
  imports:      
    [ 
      BrowserModule,
      CoreModule,
      ProjectCenterModule,
      PersonnelManagerModule,
      AppRoutingModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
