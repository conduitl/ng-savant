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
var PreviewComponent = (function () {
    // Challenges
    // - how to know whether to get person or to get project
    // - how to keep the currently selected object from the other feature
    //   selected until a new one is selected even as user toggles between features
    // Technical Q / A
    // How to I get the url from ActivateRoute?
    function PreviewComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent = __decorate([
        core_1.Component({
            selector: 'ct-preview',
            template: "\n        <h3>Preview</h3>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], PreviewComponent);
    return PreviewComponent;
}());
exports.PreviewComponent = PreviewComponent;
//# sourceMappingURL=preview.component.js.map