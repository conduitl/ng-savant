import { Injectable } from '@angular/core';
import { Project } from './model';
import { PROJECTS } from './fakedata';
@Injectable()
export class ProjectService {
    getProjects(): Project[] {
        // actual implementation would use async method
        return PROJECTS;
    }
}