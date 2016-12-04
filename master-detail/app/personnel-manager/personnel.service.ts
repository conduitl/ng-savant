import { Injectable } from '@angular/core';
import { Person } from './model';
import { PERSONNEL } from './fakedata';
@Injectable()
export class PersonnelService {
    getPersonnel(): Promise<Person[]> {
        return Promise.resolve(PERSONNEL);
    }
    getPerson(id: number): Promise<Person> {
        return this.getPersonnel()
                   .then(personnel => personnel
                        .find(person => person.id === id));
    }
}