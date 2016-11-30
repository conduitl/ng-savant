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
var Dropdown = (function () {
    function Dropdown(elementRef) {
        this._open = false;
        this.toggleElement = elementRef.nativeElement;
    }
    Object.defineProperty(Dropdown.prototype, "isOpen", {
        get: function () { return this._open; },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype.open = function () {
        if (!this._open) {
            this._open = true;
        }
    };
    Dropdown.prototype.close = function () {
        if (this._open) {
            this._open = false;
        }
    };
    Dropdown.prototype.toggle = function () {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    Dropdown.prototype.closeFromOutsideClick = function ($event) {
        if (!this._isEventFromToggle($event)) {
            this.close();
        }
    };
    Object.defineProperty(Dropdown.prototype, "toggleElement", {
        set: function (toggleElement) {
            this._toggleElement = toggleElement;
        },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype._isEventFromToggle = function ($event) {
        return this._toggleElement.contains($event.target);
    };
    __decorate([
        core_1.HostBinding('class.open'), 
        __metadata('design:type', Boolean)
    ], Dropdown.prototype, "isOpen", null);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Dropdown.prototype, "toggle", null);
    Dropdown = __decorate([
        core_1.Directive({
            selector: '[ctDropdown]',
            host: {
                '(keyup.esc)': 'close()',
                '(document:click)': 'closeFromOutsideClick($event)'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Dropdown);
    return Dropdown;
}());
exports.Dropdown = Dropdown;
//# sourceMappingURL=dropdown.directive.js.map