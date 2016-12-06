import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
import { PersonnelService } from '../personnel-manager/personnel.service';
import { Person } from '../personnel-manager/model';
import { ProjectService } from '../project-center/project.service';
import { Project } from '../project-center/model';
import { ColumnSetting, ColumnMap } from '../shared/layout.model';
@Component({
    selector: 'ct-preview',
    templateUrl: 'app/core/preview.component.html',
    styleUrls: ['app/core/preview.component.css']
})
export class PreviewComponent implements OnInit { 
    state: ActivatedRouteSnapshot;
    selectedRecord: any;
    settings: ColumnSetting[];
    valMaps: ColumnMap[];
    keys: {identifier: string, format: string}[];
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
                        this.fetchData(path, id);
                    }
                }
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
            let settings = this.personnelService.settings;
            this.personnelService.getPerson(id).then( person => {
                let valMaps = settings.map( col => new ColumnMap(col));
                let keys = valMaps.map( val => {
                    return { 
                             identifier: val.access(person),
                             format: val.format 
                           };
                }); 
                this.selectedRecord = person;
                this.keys = keys;
            });
        }
        if (path === 'projects') {
            let settings = this.projectService.settings;
            this.projectService.getProject(id).then( project => {
                let valMaps = settings.map( col => new ColumnMap(col));
                let keys = valMaps.map( val => {
                    return { 
                             identifier: val.access(project),
                             format: val.format 
                           };
                }); 
                this.selectedRecord = project;
                this.keys = keys;
            });
        }
    }
    doNotDisplayIf(data, target) {
        let val = data[0][data[1]];
        let key = data[1];
        if (!val) {
            return false;
        }
        if (key === target) {
            return false;
        }
        return true;
    }

}