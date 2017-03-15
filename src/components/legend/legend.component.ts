import {
    Component, Input, HostBinding
} from '@angular/core';
import { Legend } from './legend';

@Component({
    selector: 'datatable-legend',
    template: `
    <div>
        <ul>
            <li *ngFor="let legend of legends">
                <div><i [class]="legend.styles"></i>{{ legend.name }}</div>
            </li>
        </ul>
    </div>
    `,
    host: {
        class: 'datatable-legend'
    }
})
export class DataTableLegendComponent {
    @Input() legends: Legend[];
}
