import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
import { PersonnelService } from '../personnel-manager/personnel.service';
import { Person } from '../personnel-manager/model';
import { ProjectService } from '../project-center/project.service';
import { Project } from '../project-center/model';
@Component({
    selector: 'ct-preview',
    template: `
        <h3>Preview</h3>
        <h4>active feature: {{ featureUrl }}</h4>
        <h4>id selected: {{ featureUrlParams?.id }}</h4>
        <h4 *ngIf="selectedPerson">{{ selectedPerson.name }}</h4>
        <h4 *ngIf="selectedProject">{{ selectedProject.name }}</h4>
    `
})
export class PreviewComponent implements OnInit { 
    // Challenges
    // - how to know whether to get person or to get project
    // - how to keep the currently selected object from the other feature
    //   selected until a new one is selected even as user toggles between features
    // Router Qs 
    // how does one outlet subscribe to the state of another outlet?
    state: ActivatedRouteSnapshot;
    featureUrl: string;
    featureUrlParams;
    selectedPerson: Person;
    selectedProject: Project;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private personnelService: PersonnelService,
        private projectService: ProjectService
    ){}

    ngOnInit(){
        this.router.events.subscribe((e) => {
            if (e.constructor.name === "NavigationEnd") {
                let snapshot: ActivatedRouteSnapshot; 
                let path: string; 
                let params: Params;
                
                snapshot = this.route.root.firstChild.snapshot;
                path = snapshot.url[0].path;
                params = snapshot.firstChild.params;
                
                if (params && params['id']) {
                    let id = +params['id'];
                    if (id) {
                        console.log('Fetch record');
                        this.fetchData(path, id);
                    }
                }
                // temporary diagnostic
                this.featureUrl = path;
                this.featureUrlParams = params;
            }
        });
        // Why doesn't this work? Seems like the way to achieve objective
        // and a better way than above solution
        // this.route.root.firstChild.url.subscribe( u => {
        //     this.featureUrl = u[0].path;
        // });
    }

    fetchData(path, id){
        if (path === 'personnel') {
            this.selectedProject = null;
            this.personnelService.getPerson(id).then( person => {
                this.selectedPerson = person;
            });
        }
        if (path === 'projects') {
            this.selectedPerson = null;
            this.projectService.getProject(id).then( project => {
                this.selectedProject = project;
            });
        }

    }
}