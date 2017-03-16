import { EventEmitter } from '@angular/core';
export declare class DataTableFilterComponent {
    placeholder: string;
    filter: string;
    updated: EventEmitter<{}>;
    update(event: any): void;
    reset(): void;
}
