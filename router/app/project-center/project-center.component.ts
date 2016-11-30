import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './model';
import { ColumnSetting } from '../shared/layout.model';
@Component({
    selector: 'ct-project-center',
    templateUrl: 'app/project-center/project-center.component.html'
})
export class ProjectCenterComponent implements OnInit {
    title: string = 'Project Center';
    projects: Project[];
    projectSettings: ColumnSetting[] = 
      [
          {
              primaryKey: 'name',
              header: 'Name'
          },
          {
              primaryKey: 'first_launch',
              header: 'First Launch',
              alternativeKeys: ['launch', 'first_flight']
          },
          {
              primaryKey: 'cost',
              header: 'Cost',
              format: 'currency',
              alternativeKeys: ['total_cost']
          }
      ];
    constructor(private projectService: ProjectService){}
    ngOnInit() {
        this.projects = this.projectService.getProjects();
    }
 }