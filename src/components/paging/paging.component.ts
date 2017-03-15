import {
  Component, Output, EventEmitter, ChangeDetectionStrategy, Input, ViewChild
} from '@angular/core';

@Component({
  selector: 'datatable-paging',
  template: `
    <div
      [ngClass]="{'selected-count': selectedMessage}"
      [style.height.px]="pagingHeight">
      <datatable-pager #pager
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)">
      </datatable-pager>
    </div>
  `,
  host: {
    class: 'datatable-paging'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTablePagingComponent {

  @ViewChild('pager') pager;

  @Input() pagingHeight: number;
  @Input() rowCount: number;
  @Input() pageSize: number;
  @Input() offset: number;
  @Input() pagerLeftArrowIcon: string;
  @Input() pagerRightArrowIcon: string;
  @Input() pagerPreviousIcon: string;
  @Input() pagerNextIcon: string;
  @Input() totalMessage: string;

  @Input() selectedCount: number = 0;
  @Input() selectedMessage: string | boolean;

  @Output() page: EventEmitter<any> = new EventEmitter();

  get isVisible(): boolean {
    return (this.rowCount / this.pageSize) > 1;
  }

  get curPage(): number {
    return this.offset + 1;
  }

  reset(): void {
    this.pager.reset();
  }

}
