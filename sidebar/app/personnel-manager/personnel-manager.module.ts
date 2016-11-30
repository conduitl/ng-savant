import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PersonnelManagerComponent } from './personnel-manager.component';
import { PersonnelRoutingModule } from './personnel-routing.module';
import { PersonnelService } from './personnel.service';
@NgModule({
    imports: [ 
        SharedModule,
        PersonnelRoutingModule
      ],
    declarations: [ PersonnelManagerComponent ],
    providers: [ PersonnelService ],
    exports: [ PersonnelManagerComponent ]
})
export class PersonnelManagerModule { }