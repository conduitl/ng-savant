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
var TableLayoutComponent = (function () {
    function TableLayoutComponent() {
    }
    TableLayoutComponent.prototype.ngOnChanges = function () {
        console.log(this.records);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TableLayoutComponent.prototype, "records", void 0);
    TableLayoutComponent = __decorate([
        core_1.Component({
            selector: 'ct-table',
            templateUrl: 'app/shared/table-layout.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TableLayoutComponent);
    return TableLayoutComponent;
}());
exports.TableLayoutComponent = TableLayoutComponent;
//# sourceMappingURL=table-layout.component.js.map