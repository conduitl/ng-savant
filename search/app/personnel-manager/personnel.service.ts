import { Injectable } from '@angular/core';
import { Person } from './model';
import { PERSONNEL } from './fakedata';
@Injectable()
export class PersonnelService {
    getPersonnel(): Person[] {
        return PERSONNEL;
    }
}