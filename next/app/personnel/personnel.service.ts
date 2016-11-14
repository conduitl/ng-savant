import { Injectable } from '@angular/core';
import { Person } from './model';
import { PERSONNEL } from '../fake-data/fakedata';
@Injectable()
export class PersonnelService {
    getPersonnel(): Person[] {
        return PERSONNEL;
    }
}