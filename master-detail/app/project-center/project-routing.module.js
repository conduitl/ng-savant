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
var project_center_component_1 = require('./project-center.component');
var projectRoutes = [
    {
        path: 'projects',
        children: [
            {
                path: ':id',
                component: project_center_component_1.ProjectCenterComponent
            },
            {
                path: '',
                redirectTo: 'select',
                pathMatch: 'full'
            }
        ]
    }
];
var ProjectRoutingModule = (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(projectRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());
exports.ProjectRoutingModule = ProjectRoutingModule;
//# sourceMappingURL=project-routing.module.js.map