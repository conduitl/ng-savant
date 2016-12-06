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
var fakedata_1 = require('./fakedata');
var ProjectService = (function () {
    function ProjectService() {
    }
    Object.defineProperty(ProjectService.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        set: function (projectSettings) {
            this._settings = projectSettings;
        },
        enumerable: true,
        configurable: true
    });
    ProjectService.prototype.getProjects = function () {
        return Promise.resolve(fakedata_1.PROJECTS);
    };
    ProjectService.prototype.findOne = function (id) {
        return this.getProjects()
            .then(function (projects) { return projects
            .find(function (project) { return project.id === id; }); });
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map