import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project-center/project.service';
import { Project } from '../project-center/model';
@Component({
    template: `
        <h3>Data set summary</h3>
    `
})
export class DataSummaryComponent implements OnInit { 
    projects: Project[];
    constructor(private projectService: ProjectService){}
    ngOnInit(){
        this.projects = this.projectService.getProjects();
        console.log('Hello from Preview');
        console.log('Your projects are:');
        console.log(this.projects);
    }
}