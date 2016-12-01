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
var personnel_service_1 = require('./personnel.service');
var PersonnelManagerComponent = (function () {
    function PersonnelManagerComponent(personnelService) {
        this.personnelService = personnelService;
        this.title = 'Personnel Manager';
        this.personnelSettings = [
            { primaryKey: 'name' },
            { primaryKey: 'year_joined', header: 'Joined' },
            { primaryKey: 'missions' },
            { primaryKey: 'manager' },
            { primaryKey: 'crewWith', header: 'Crew mates' }
        ];
    }
    PersonnelManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personnelService.getPersonnel()
            .then(function (personnel) { return _this.people = personnel; });
    };
    PersonnelManagerComponent = __decorate([
        core_1.Component({
            selector: 'ct-personnel-manager',
            templateUrl: 'app/personnel-manager/personnel-manager.component.html'
        }), 
        __metadata('design:paramtypes', [personnel_service_1.PersonnelService])
    ], PersonnelManagerComponent);
    return PersonnelManagerComponent;
}());
exports.PersonnelManagerComponent = PersonnelManagerComponent;
//# sourceMappingURL=personnel-manager.component.js.map