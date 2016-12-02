import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project-center/project.service';
import { PersonnelService } from '../personnel-manager/personnel.service';
import { Project } from '../project-center/model';
import { Person } from '../personnel-manager/model';
@Component({
    template: `
        <h3>Data set summary</h3>
        <ul *ngIf="dataSummary">
            <li>{{ dataSummary.projects.title }} : {{ dataSummary.projects.total }}</li>
            <li>{{ dataSummary.personnel.title }} : {{ dataSummary.personnel.total }}</li>
        </ul>
    `
})
export class DataSummaryComponent implements OnInit { 
    dataSummary: {
        projects: any,
        personnel: any
    };
    constructor(
        private projectService: ProjectService,
        private personnelService: PersonnelService
    ){}
    
    ngOnInit(){
        Promise.all([
            this.projectService.getProjects(),
            this.personnelService.getPersonnel()
        ]).then(values => {
            this.summarizeData(values[0], values[1]);
        });
    }
    summarizeData(projects: Project[], personnel: Person[]) {
        this.dataSummary = {
            projects: {
                title: 'Projects in data set',
                total: projects.length
            },
            personnel: {
                title: 'Personnel in data set',
                total: personnel.length
            }
        };
    }
}