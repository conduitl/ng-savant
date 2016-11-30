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
var ProjectCenterComponent = (function () {
    function ProjectCenterComponent() {
        this.title = 'Project Center';
        this.showColSettings = false;
        this.panelStates = {};
    }
    ProjectCenterComponent.prototype.setState = function (state) {
        this.dropAction = state;
    };
    ProjectCenterComponent.prototype.toggleColSettings = function () {
        this.showColSettings = !this.showColSettings;
    };
    ProjectCenterComponent.prototype.toggleView = function (panel_id) {
        console.log('Toggle panel: ' + panel_id);
        if (!this.panelStates[panel_id]) {
            this.panelStates[panel_id] = true;
        }
        else {
            this.panelStates[panel_id] = !this.panelStates[panel_id];
        }
        console.log(this.panelStates);
    };
    ProjectCenterComponent = __decorate([
        core_1.Component({
            selector: 'ct-project-center',
            templateUrl: 'app/project-center/project-center.component.html',
            styles: ["\n        .glyphicon {\n            margin-top: 5px;\n            margin-bottom: 5px;\n        }\n        a .glyphicon {\n            font-size: 9px;\n        }\n        .form-group {\n            margin-right: 10px;\n        }\n        .btn-group {\n            margin-right: 10px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectCenterComponent);
    return ProjectCenterComponent;
}());
exports.ProjectCenterComponent = ProjectCenterComponent;
//# sourceMappingURL=project-center.component.js.map