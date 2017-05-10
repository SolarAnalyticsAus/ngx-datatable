"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTablePagerComponent = (function () {
    function DataTablePagerComponent() {
        this.change = new core_1.EventEmitter();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    Object.defineProperty(DataTablePagerComponent.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (val) {
            this._size = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (val) {
            this._count = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (val) {
            this._page = val;
            this.pages = this.calcPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagerComponent.prototype, "totalPages", {
        get: function () {
            var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
            return Math.max(count || 0, 1);
        },
        enumerable: true,
        configurable: true
    });
    DataTablePagerComponent.prototype.canPrevious = function () {
        return this.page > 1;
    };
    DataTablePagerComponent.prototype.canNext = function () {
        return this.page < this.totalPages;
    };
    DataTablePagerComponent.prototype.prevPage = function () {
        this.selectPage(this.page - 1);
    };
    DataTablePagerComponent.prototype.nextPage = function () {
        this.selectPage(this.page + 1);
    };
    DataTablePagerComponent.prototype.selectPage = function (page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page: page
            });
        }
    };
    DataTablePagerComponent.prototype.reset = function () {
        this.selectPage(1);
    };
    DataTablePagerComponent.prototype.calcPages = function (page) {
        var pages = [];
        var startPage = 1;
        var endPage = this.totalPages;
        var maxSize = 3;
        var isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = ((Math.ceil(page / maxSize) - 1) * maxSize) + 1;
            endPage = Math.min(startPage + maxSize - 1, this.totalPages);
        }
        for (var num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: num
            });
        }
        return pages;
    };
    return DataTablePagerComponent;
}());
DataTablePagerComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'datatable-pager',
                template: "\n\n    <ul class=\"pager\"\n      *ngIf=\"totalPages > 1\">\n      <li class=\"pager-button\" [class.disabled]=\"!canPrevious()\"\n        *ngIf=\"isFirstPagerEnabled\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"selectPage(1)\">\n          <i class=\"{{pagerPreviousIcon}}\"></i>\n        </a>\n      </li>\n      <li class=\"pager-button\" [class.disabled]=\"!canPrevious()\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"prevPage()\">\n          <i class=\"{{pagerLeftArrowIcon}}\"></i>\n        </a>\n      </li>\n      <li class=\"pager-page\" [class.active]=\"page === 1\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"selectPage(1)\">1</a>\n      </li>\n      <li class=\"pager-separator\" *ngIf=\"page > pages.length\">...</li>\n      <li class=\"pager-page\" *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.number === page\"\n        [ngClass]=\"{'border-left': pg.number == 2 || (pg.number > 1 && pg.number != pages[0].number)}\">\n          <a\n            href=\"javascript:void(0)\"\n            (click)=\"selectPage(pg.number)\"\n            *ngIf=\"pg.number > 1 && pg.number < totalPages\">{{pg.text}}</a>\n      </li>\n      <li class=\"pager-separator\" *ngIf=\"page <= totalPages - pages.length\">...</li>\n      <li class=\"pager-page\" [class.active]=\"page === totalPages\"\n        [ngClass]=\"{'border-left': page > totalPages - pages.length}\">\n        <a (click)=\"selectPage(totalPages)\">{{totalPages}}</a>\n      </li>\n      <li class=\"pager-button\" [class.disabled]=\"!canNext()\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"nextPage()\">\n          <i class=\"{{pagerRightArrowIcon}}\"></i>\n        </a>\n      </li>\n      <li class=\"pager-button\" [class.disabled]=\"!canNext()\"\n        *ngIf=\"isLastPagerEnabled\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"selectPage(totalPages)\">\n          <i class=\"{{pagerNextIcon}}\"></i>\n        </a>\n      </li>\n    </ul>\n  ",
                host: {
                    class: 'datatable-pager'
                },
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
DataTablePagerComponent.ctorParameters = function () { return []; };
DataTablePagerComponent.propDecorators = {
    'isFirstPagerEnabled': [{ type: core_1.Input },],
    'isLastPagerEnabled': [{ type: core_1.Input },],
    'pagerLeftArrowIcon': [{ type: core_1.Input },],
    'pagerRightArrowIcon': [{ type: core_1.Input },],
    'pagerPreviousIcon': [{ type: core_1.Input },],
    'pagerNextIcon': [{ type: core_1.Input },],
    'size': [{ type: core_1.Input },],
    'count': [{ type: core_1.Input },],
    'page': [{ type: core_1.Input },],
    'change': [{ type: core_1.Output },],
};
exports.DataTablePagerComponent = DataTablePagerComponent;
//# sourceMappingURL=pager.component.js.map