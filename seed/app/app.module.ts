import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { ProjectModule } from './project-portfolio/project.module';

import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ 
    BrowserModule,
    CoreModule,
    ProjectModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
