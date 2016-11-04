import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { PROJECTS } from './project.fakedata';
@Injectable()
export class ProjectService {
    getProjects(): Project[] {
        return PROJECTS;
    }
}