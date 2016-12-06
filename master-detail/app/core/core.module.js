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
var common_1 = require('@angular/common');
var shared_module_1 = require('../shared/shared.module');
var navbar_component_1 = require('./navbar.component');
var menu_component_1 = require('./menu.component');
var not_found_component_1 = require('./not-found.component');
var data_summary_component_1 = require('./data-summary.component');
var preview_component_1 = require('./preview.component');
var app_routing_module_1 = require('../app-routing.module');
/* App-wide services */
var common_2 = require('@angular/common');
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule, app_routing_module_1.AppRoutingModule],
            declarations: [
                navbar_component_1.NavbarComponent,
                menu_component_1.MenuComponent,
                not_found_component_1.NotFoundComponent,
                data_summary_component_1.DataSummaryComponent,
                preview_component_1.PreviewComponent
            ],
            exports: [
                navbar_component_1.NavbarComponent,
                menu_component_1.MenuComponent,
                data_summary_component_1.DataSummaryComponent,
                preview_component_1.PreviewComponent,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [common_2.CurrencyPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map