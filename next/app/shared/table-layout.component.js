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
var layout_model_1 = require('./layout.model');
var TableLayoutComponent = (function () {
    function TableLayoutComponent() {
        this.columnStates = [];
    }
    TableLayoutComponent.prototype.ngOnChanges = function () {
        if (this.settings) {
            this.columnMaps = this.settings
                .map(function (col) { return new layout_model_1.ColumnMap(col); });
        }
        else {
            this.columnMaps = Object.keys(this.records[0]).map(function (key) {
                return new layout_model_1.ColumnMap({ primaryKey: key });
            });
        }
        this.initializeColumnState();
        this.setColumnWidth('missions', 40);
        this.setColumnWidth('crew mates', 50);
    };
    TableLayoutComponent.prototype.initializeColumnState = function () {
        var len = this.columnMaps.length;
        var defaultWidth = 100 / len;
        for (var i = 0; i < len; i++) {
            var column = {};
            column.position = i;
            column.name = this.columnMaps[i].header;
            column.width = defaultWidth;
            this.columnStates.push(column);
        }
        console.log('State of columns');
        console.log(this.columnStates);
    };
    TableLayoutComponent.prototype.setColumnWidth = function (name, width) {
        name = name.toLowerCase();
        var defaultWidth = (100 - width) / (this.columnStates.length - 1);
        for (var _i = 0, _a = this.columnStates; _i < _a.length; _i++) {
            var column = _a[_i];
            if (column.name.toLowerCase() === name) {
                column.width = width;
            }
            else {
                column.width = defaultWidth;
            }
        }
    };
    TableLayoutComponent.prototype.logEvent = function () {
        console.log('dragging');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TableLayoutComponent.prototype, "records", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TableLayoutComponent.prototype, "caption", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TableLayoutComponent.prototype, "settings", void 0);
    TableLayoutComponent = __decorate([
        core_1.Component({
            selector: 'ct-table',
            templateUrl: 'app/shared/table-layout.component.html',
            styleUrls: ['app/shared/table-layout.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TableLayoutComponent);
    return TableLayoutComponent;
}());
exports.TableLayoutComponent = TableLayoutComponent;
//# sourceMappingURL=table-layout.component.js.map