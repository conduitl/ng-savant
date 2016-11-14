import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { CoreModule } from './core/core.module';
import { ProjectCenterModule } from './project-center/project-center.module';
import { PersonnelManagerModule } from './personnel/personnel-manager.module';

import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProjectCenterModule,
    PersonnelManagerModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
