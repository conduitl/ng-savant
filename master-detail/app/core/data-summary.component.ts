import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project-center/project.service';
import { PersonnelService } from '../personnel-manager/personnel.service';
import { Project } from '../project-center/model';
import { Person } from '../personnel-manager/model';
@Component({
    template: `
        <h3>Data set summary</h3>
        <ul>
            <li>{{ dataSummary.projects.title }} : {{ dataSummary.projects.total }}</li>
            <li>{{ dataSummary.personnel.title }} : {{ dataSummary.personnel.total }}</li>
        </ul>
    `
})
export class DataSummaryComponent implements OnInit { 
    projects: Project[];
    personnel: Person[];
    dataSummary: {
        projects: any,
        personnel: any
    };
    constructor(
        private projectService: ProjectService,
        private personnelService: PersonnelService
    ){}
    
    ngOnInit(){
        this.projects = this.projectService.getProjects();
        this.personnel = this.personnelService.getPersonnel();
        this.summarizeData();
    }
    summarizeData() {
        this.dataSummary = {
            projects: {
                title: 'Projects in data set',
                total: this.projects.length
            },
            personnel: {
                title: 'Personnel in data set',
                total: this.personnel.length
            }
        };
        
    }
}