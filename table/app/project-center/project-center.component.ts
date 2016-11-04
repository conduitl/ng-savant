import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Component({
    selector: 'ct-project-center',
    templateUrl: 'app/project-center/project-center.component.html'
})
export class ProjectCenterComponent {
    title: string = 'Project Center';
    projects: Project[];

    constructor(private projectService: ProjectService){}

    ngOnInit(): void {
        this.projects = this.projectService.getProjects();
        console.log(this.projects);
    }
 }