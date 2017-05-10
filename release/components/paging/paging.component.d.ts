import { EventEmitter } from '@angular/core';
export declare class DataTablePagingComponent {
    pager: any;
    pagingHeight: number;
    rowCount: number;
    pageSize: number;
    offset: number;
    isFirstPagerEnabled: boolean;
    isLastPagerEnabled: boolean;
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    totalMessage: string;
    selectedCount: number;
    selectedMessage: string | boolean;
    page: EventEmitter<any>;
    readonly isVisible: boolean;
    readonly curPage: number;
    reset(): void;
}
