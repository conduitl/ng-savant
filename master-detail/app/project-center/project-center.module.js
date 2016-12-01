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
var shared_module_1 = require('../shared/shared.module');
var project_center_component_1 = require('./project-center.component');
var project_service_1 = require('./project.service');
var ProjectCenterModule = (function () {
    function ProjectCenterModule() {
    }
    ProjectCenterModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild([
                    {
                        path: 'projects/:id',
                        component: project_center_component_1.ProjectCenterComponent
                    },
                    {
                        path: 'projects',
                        redirectTo: 'projects/select',
                        pathMatch: 'full'
                    }
                ])
            ],
            declarations: [project_center_component_1.ProjectCenterComponent],
            providers: [project_service_1.ProjectService],
            exports: [project_center_component_1.ProjectCenterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectCenterModule);
    return ProjectCenterModule;
}());
exports.ProjectCenterModule = ProjectCenterModule;
//# sourceMappingURL=project-center.module.js.map