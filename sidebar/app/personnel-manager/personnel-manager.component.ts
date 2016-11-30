import { Component, OnInit } from '@angular/core';
import { PersonnelService } from './personnel.service';
import { Person } from './model';
import { ColumnSetting } from '../shared/layout.model';
@Component({
    selector: 'ct-personnel-manager',
    templateUrl: 'app/personnel-manager/personnel-manager.component.html'
})
export class PersonnelManagerComponent implements OnInit {
    title: string = 'Personnel Manager';
    people: Person[];
    personnelSettings: ColumnSetting[] = 
       [
            {  primaryKey: 'name' },
            {  primaryKey: 'year_joined', header: 'Joined' },
            {  primaryKey: 'missions' },
            {  primaryKey: 'manager'  },
            {  primaryKey: 'crewWith', header: 'Crew mates'}
        ];
    constructor(private personnelService: PersonnelService){}
    ngOnInit() {
        this.people =   this.personnelService.getPersonnel();
    }
 }