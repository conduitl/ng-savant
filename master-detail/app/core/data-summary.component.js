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
var project_service_1 = require('../project-center/project.service');
var personnel_service_1 = require('../personnel-manager/personnel.service');
var DataSummaryComponent = (function () {
    function DataSummaryComponent(projectService, personnelService) {
        this.projectService = projectService;
        this.personnelService = personnelService;
    }
    DataSummaryComponent.prototype.ngOnInit = function () {
        this.projects = this.projectService.getProjects();
        this.personnel = this.personnelService.getPersonnel();
        this.summarizeData();
    };
    DataSummaryComponent.prototype.summarizeData = function () {
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
    };
    DataSummaryComponent = __decorate([
        core_1.Component({
            template: "\n        <h3>Data set summary</h3>\n        <ul>\n            <li>{{ dataSummary.projects.title }} : {{ dataSummary.projects.total }}</li>\n            <li>{{ dataSummary.personnel.title }} : {{ dataSummary.personnel.total }}</li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, personnel_service_1.PersonnelService])
    ], DataSummaryComponent);
    return DataSummaryComponent;
}());
exports.DataSummaryComponent = DataSummaryComponent;
//# sourceMappingURL=data-summary.component.js.map