"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTableFilterComponent = (function () {
    function DataTableFilterComponent() {
        this.placeholder = 'Search';
        this.updated = new core_1.EventEmitter();
    }
    DataTableFilterComponent.prototype.update = function (event) {
        this.updated.emit(event);
    };
    DataTableFilterComponent.prototype.reset = function () {
        this.filter = '';
    };
    return DataTableFilterComponent;
}());
DataTableFilterComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'datatable-filter',
                template: "\n    <div>\n        <input type=\"text\"\n            [placeholder]=\"placeholder\"\n            (keyup)=\"update($event)\"\n            [(ngModel)]=\"filter\"/>\n        <i class=\"icon-search\"></i>\n    </div>\n    ",
                host: {
                    class: 'datatable-filter'
                }
            },] },
];
/** @nocollapse */
DataTableFilterComponent.ctorParameters = function () { return []; };
DataTableFilterComponent.propDecorators = {
    'placeholder': [{ type: core_1.Input },],
    'filter': [{ type: core_1.Input },],
    'updated': [{ type: core_1.Output },],
};
exports.DataTableFilterComponent = DataTableFilterComponent;
//# sourceMappingURL=filter.component.js.map