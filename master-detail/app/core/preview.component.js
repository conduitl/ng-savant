"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var personnel_service_1 = require('../personnel-manager/personnel.service');
var project_service_1 = require('../project-center/project.service');
var PreviewComponent = (function () {
    function PreviewComponent(router, route, personnelService, projectService) {
        this.router = router;
        this.route = route;
        this.personnelService = personnelService;
        this.projectService = projectService;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (e) {
            if (e.constructor.name === "NavigationEnd") {
                var snapshot = void 0;
                var path = void 0;
                var params = void 0;
                snapshot = _this.route.root.firstChild.snapshot;
                path = snapshot.url[0].path;
                params = snapshot.firstChild.params;
                if (params && params['id']) {
                    var id = +params['id'];
                    if (id) {
                        console.log('Fetch record');
                        _this.fetchData(path, id);
                    }
                }
            }
        });
        // Why doesn't this work? Seems like the way to achieve objective
        // and a better way than above solution
        // this.route.root.firstChild.url.subscribe( u => {
        //     this.featureUrl = u[0].path;
        // });
    };
    PreviewComponent.prototype.fetchData = function (path, id) {
        var _this = this;
        if (path === 'personnel') {
            this.selectedProject = null;
            this.personnelService.getPerson(id).then(function (person) {
                _this.selectedPerson = person;
            });
        }
        if (path === 'projects') {
            this.selectedPerson = null;
            this.projectService.getProject(id).then(function (project) {
                _this.selectedProject = project;
            });
        }
    };
    PreviewComponent = __decorate([
        core_1.Component({
            selector: 'ct-preview',
            templateUrl: 'app/core/preview.component.html',
            styleUrls: ['app/core/preview.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, personnel_service_1.PersonnelService, project_service_1.ProjectService])
    ], PreviewComponent);
    return PreviewComponent;
}());
exports.PreviewComponent = PreviewComponent;
//# sourceMappingURL=preview.component.js.map