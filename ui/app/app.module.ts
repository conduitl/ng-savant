import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { ProjectCenterModule } from './project-center/project-center.module';

import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ 
    BrowserModule,
    CoreModule,
    ProjectCenterModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
