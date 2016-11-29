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
var Collapse = (function () {
    function Collapse(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    Collapse.prototype.ngOnInit = function () {
        this.initializeHeight();
    };
    Collapse.prototype.ngOnChanges = function () {
        var _this = this;
        var height = this.el.nativeElement.offsetHeight;
        var pts = this.setEndPoints('0', height + 'px', this.ctCollapse);
        console.log(pts);
        this.toggleClass('collapsing', true);
        if (this.ctCollapse) {
            this.toggleClass('in', true);
        }
        this.setHeight(pts[0]);
        setTimeout(function () {
            _this.setHeight(pts[1]);
        }, 1);
        setTimeout(function () {
            _this.toggleClass('collapsing', false);
            if (!_this.ctCollapse) {
                _this.toggleClass('in', false);
            }
            _this.setHeight(null);
        }, 350);
    };
    Collapse.prototype.initializeHeight = function () {
        this.toggleClass('in', true);
        var task;
        task = (function () {
            var _this = this;
            return function () {
                _this.toggleClass('in', true);
            };
        })();
        task();
        // let tasks = [
        //     (function() {
        //         return () => {
        //              this.toggleClass('in', true);
        //             next() 
        //         };
        //     })(),
        //     (function() {
        //         return () => {
        //             console.log('Initialized height: ' + this.expandedHeight);
        //             next() 
        //         };
        //     })(),
        //     (function() {
        //         return () => {
        //             this.toggleClass('in', false);
        //             next() 
        //         };
        //     })()
        // ];
        // next();
        // function next(){
        //     if (tasks.length > 0) {
        //         let task = tasks.shift();
        //         task();
        //     }
        // }
    };
    Collapse.prototype.setEndPoints = function (min, max, bool) {
        if (bool) {
            return [min, max];
        }
        return [max, min];
    };
    Collapse.prototype.toggleClass = function (name, bool) {
        this.renderer.setElementClass(this.el.nativeElement, name, bool);
    };
    Collapse.prototype.setHeight = function (val) {
        this.renderer.setElementStyle(this.el.nativeElement, 'height', val);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Collapse.prototype, "ctCollapse", void 0);
    Collapse = __decorate([
        core_1.Directive({
            selector: '[ctCollapse]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], Collapse);
    return Collapse;
}());
exports.Collapse = Collapse;
//# sourceMappingURL=collapse.js.map