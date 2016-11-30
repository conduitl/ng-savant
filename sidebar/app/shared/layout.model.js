"use strict";
var ColumnSetting = (function () {
    function ColumnSetting() {
    }
    return ColumnSetting;
}());
exports.ColumnSetting = ColumnSetting;
var ColumnMap = (function () {
    function ColumnMap(settings) {
        this.access = function (object) {
            if (object[this.primaryKey] || !this.alternativeKeys) {
                return this.primaryKey;
            }
            for (var _i = 0, _a = this.alternativeKeys; _i < _a.length; _i++) {
                var key = _a[_i];
                if (object[key]) {
                    return key;
                }
            }
            return this.primaryKey;
        };
        this.primaryKey = settings.primaryKey;
        this.header = settings.header;
        this.format = settings.format;
        this.alternativeKeys = settings.alternativeKeys;
    }
    Object.defineProperty(ColumnMap.prototype, "header", {
        get: function () {
            return this._header;
        },
        set: function (setting) {
            this._header = setting ?
                setting :
                this.primaryKey.slice(0, 1).toUpperCase() +
                    this.primaryKey.replace(/_/g, ' ').slice(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnMap.prototype, "format", {
        get: function () {
            return this._format;
        },
        set: function (setting) {
            this._format = setting ? setting : 'default';
        },
        enumerable: true,
        configurable: true
    });
    return ColumnMap;
}());
exports.ColumnMap = ColumnMap;
//# sourceMappingURL=layout.model.js.map