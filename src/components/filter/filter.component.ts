import {
    Component, Output, EventEmitter, Input, HostBinding
} from '@angular/core';

@Component({
    selector: 'datatable-filter',
    template: `
    <div>
        <input type="text"
            [placeholder]="placeholder"
            (keyup)="update($event)"
            [(ngModel)]="filter"/>
        <i class="icon-search"></i>
    </div>
    `,
    host: {
        class: 'datatable-filter'
    }
})
export class DataTableFilterComponent {
    @Input() placeholder: string = 'Search';
    @Input() filter: string;
    @Output() updated = new EventEmitter();

    update(event) {
        this.updated.emit(event);
    }

    reset() {
        this.filter = '';
    }
}
