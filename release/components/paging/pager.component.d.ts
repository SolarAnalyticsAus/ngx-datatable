import { EventEmitter } from '@angular/core';
export declare class DataTablePagerComponent {
    isFirstPagerEnabled: boolean;
    isLastPagerEnabled: boolean;
    pagerLeftArrowIcon: string;
    pagerRightArrowIcon: string;
    pagerPreviousIcon: string;
    pagerNextIcon: string;
    size: number;
    count: number;
    page: number;
    readonly totalPages: number;
    change: EventEmitter<any>;
    _count: number;
    _page: number;
    _size: number;
    pages: any;
    canPrevious(): boolean;
    canNext(): boolean;
    prevPage(): void;
    nextPage(): void;
    selectPage(page: number): void;
    reset(): void;
    calcPages(page?: number): any[];
}
