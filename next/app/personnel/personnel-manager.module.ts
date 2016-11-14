import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PersonnelManagerComponent } from './personnel-manager.component';
import { PersonnelService } from './personnel.service';
@NgModule({
    imports: [ SharedModule ],
    declarations: [ PersonnelManagerComponent ],
    providers: [ PersonnelService ],
    exports: [ PersonnelManagerComponent ]
})
export class PersonnelManagerModule { }