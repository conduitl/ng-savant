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
var shared_module_1 = require('../shared/shared.module');
var personnel_manager_component_1 = require('./personnel-manager.component');
var personnel_service_1 = require('./personnel.service');
var PersonnelManagerModule = (function () {
    function PersonnelManagerModule() {
    }
    PersonnelManagerModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule],
            declarations: [personnel_manager_component_1.PersonnelManagerComponent],
            providers: [personnel_service_1.PersonnelService],
            exports: [personnel_manager_component_1.PersonnelManagerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PersonnelManagerModule);
    return PersonnelManagerModule;
}());
exports.PersonnelManagerModule = PersonnelManagerModule;
//# sourceMappingURL=personnel-manager.module.js.map