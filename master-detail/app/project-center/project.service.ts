import { Injectable } from '@angular/core';
import { Project } from './model';
import { PROJECTS } from './fakedata';
import { ColumnSetting } from '../shared/layout.model';
@Injectable()
export class ProjectService {
    private _settings: ColumnSetting[];
    set settings(projectSettings: ColumnSetting[]) {
        this._settings = projectSettings;
    }
    get settings() {
        return this._settings;
    }
    getProjects(): Promise<Project[]> {
        return Promise.resolve(PROJECTS);
    }
    getProject(id: number): Promise<Project> {
        return this.getProjects()
                   .then(projects => projects
                       .find(project => project.id === id));
    }
}