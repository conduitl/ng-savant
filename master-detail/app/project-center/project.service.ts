import { Injectable } from '@angular/core';
import { Project } from './model';
import { PROJECTS } from './fakedata';
@Injectable()
export class ProjectService {
    getProjects(): Promise<Project[]> {
        return Promise.resolve(PROJECTS);
    }
    getProject(id: number): Promise<Project> {
        return this.getProjects()
                   .then(projects => projects
                       .find(project => project.id === id));
    }
}