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
var FormatCellPipe = (function () {
    function FormatCellPipe(currencyPipe) {
        this.currencyPipe = currencyPipe;
    }
    FormatCellPipe.prototype.transform = function (value, format) {
        if (value === undefined) {
            return 'not available';
        }
        if (format === 'default') {
            if (Array.isArray(value)) {
                if (typeof value[0] !== 'object') {
                    return value.join(', ');
                }
                else {
                    return value.map(function (obj) {
                        return obj.name;
                    }).join(', ');
                }
            }
            if (typeof value === "object") {
                return value.name;
            }
        }
        if (format === 'currency') {
            return this.currencyPipe.transform(value, 'USD', true);
        }
        return value;
    };
    FormatCellPipe = __decorate([
        core_1.Pipe({ name: 'formatCell' }), 
        __metadata('design:paramtypes', [common_1.CurrencyPipe])
    ], FormatCellPipe);
    return FormatCellPipe;
}());
exports.FormatCellPipe = FormatCellPipe;
//# sourceMappingURL=format-cell.pipe.js.map