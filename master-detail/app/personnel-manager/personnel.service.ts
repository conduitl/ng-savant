import { Injectable } from '@angular/core';
import { Person } from './model';
import { PERSONNEL } from './fakedata';
import { ColumnSetting } from '../shared/layout.model';
@Injectable()
export class PersonnelService {
    private _settings: ColumnSetting[];
    set settings(personnelSettings: ColumnSetting[]) {
        this._settings = personnelSettings;
    }
    get settings() {
        return this._settings;
    }

    getPersonnel(): Promise<Person[]> {
        return Promise.resolve(PERSONNEL);
    }
    findOne(id: number): Promise<Person> {
        return this.getPersonnel()
                   .then(personnel => personnel
                        .find(person => person.id === id));
    }
    
}