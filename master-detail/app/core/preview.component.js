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
    function PreviewComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (e) {
            if (e.constructor.name === "NavigationEnd") {
                _this.featureUrl = _this.route.root.firstChild.snapshot.url[0].path;
            }
        });
        // this.route.root.firstChild.url.subscribe( u => {
        //     this.featureUrl = u[0].path;
        // });
    };
    PreviewComponent = __decorate([
        core_1.Component({
            selector: 'ct-preview',
            template: "\n        <h3>Preview</h3>\n        <h4>active feature: {{ featureUrl }}</h4>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], PreviewComponent);
    return PreviewComponent;
}());
exports.PreviewComponent = PreviewComponent;
//# sourceMappingURL=preview.component.js.map