"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTableLegendComponent = (function () {
    function DataTableLegendComponent() {
    }
    return DataTableLegendComponent;
}());
DataTableLegendComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'datatable-legend',
                template: "\n    <div>\n        <ul>\n            <li *ngFor=\"let legend of legends\">\n                <div><i [class]=\"legend.styles\"></i>{{ legend.name }}</div>\n            </li>\n        </ul>\n    </div>\n    ",
                host: {
                    class: 'datatable-legend'
                }
            },] },
];
/** @nocollapse */
DataTableLegendComponent.ctorParameters = function () { return []; };
DataTableLegendComponent.propDecorators = {
    'legends': [{ type: core_1.Input },],
};
exports.DataTableLegendComponent = DataTableLegendComponent;
//# sourceMappingURL=legend.component.js.map