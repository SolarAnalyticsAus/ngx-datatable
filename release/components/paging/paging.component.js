"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTablePagingComponent = (function () {
    function DataTablePagingComponent() {
        this.selectedCount = 0;
        this.page = new core_1.EventEmitter();
    }
    Object.defineProperty(DataTablePagingComponent.prototype, "isVisible", {
        get: function () {
            return (this.rowCount / this.pageSize) > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagingComponent.prototype, "curPage", {
        get: function () {
            return this.offset + 1;
        },
        enumerable: true,
        configurable: true
    });
    DataTablePagingComponent.prototype.reset = function () {
        this.pager.reset();
    };
    return DataTablePagingComponent;
}());
DataTablePagingComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'datatable-paging',
                template: "\n    <div\n      [ngClass]=\"{'selected-count': selectedMessage}\"\n      [style.height.px]=\"pagingHeight\">\n      <datatable-pager #pager\n        [isFirstPagerEnabled]=\"isFirstPagerEnabled\"\n        [isLastPagerEnabled]=\"isLastPagerEnabled\"\n        [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n        [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n        [pagerPreviousIcon]=\"pagerPreviousIcon\"\n        [pagerNextIcon]=\"pagerNextIcon\"\n        [page]=\"curPage\"\n        [size]=\"pageSize\"\n        [count]=\"rowCount\"\n        [hidden]=\"!isVisible\"\n        (change)=\"page.emit($event)\">\n      </datatable-pager>\n    </div>\n  ",
                host: {
                    class: 'datatable-paging'
                },
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
DataTablePagingComponent.ctorParameters = function () { return []; };
DataTablePagingComponent.propDecorators = {
    'pager': [{ type: core_1.ViewChild, args: ['pager',] },],
    'pagingHeight': [{ type: core_1.Input },],
    'rowCount': [{ type: core_1.Input },],
    'pageSize': [{ type: core_1.Input },],
    'offset': [{ type: core_1.Input },],
    'isFirstPagerEnabled': [{ type: core_1.Input },],
    'isLastPagerEnabled': [{ type: core_1.Input },],
    'pagerLeftArrowIcon': [{ type: core_1.Input },],
    'pagerRightArrowIcon': [{ type: core_1.Input },],
    'pagerPreviousIcon': [{ type: core_1.Input },],
    'pagerNextIcon': [{ type: core_1.Input },],
    'totalMessage': [{ type: core_1.Input },],
    'selectedCount': [{ type: core_1.Input },],
    'selectedMessage': [{ type: core_1.Input },],
    'page': [{ type: core_1.Output },],
};
exports.DataTablePagingComponent = DataTablePagingComponent;
//# sourceMappingURL=paging.component.js.map