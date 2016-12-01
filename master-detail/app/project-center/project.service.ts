import { Injectable } from '@angular/core';
import { Project } from './model';
import { PROJECTS } from './fakedata';
@Injectable()
export class ProjectService {
    getProjects(): Promise<Project[]> {
        return Promise.resolve(PROJECTS);
    }
}