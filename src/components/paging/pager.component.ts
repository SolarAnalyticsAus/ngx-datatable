import {
  Component, Input, Output, EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'datatable-pager',
  template: `

    <ul class="pager"
      *ngIf="totalPages > 1">
      <li class="pager-button" [class.disabled]="!canPrevious()"
        *ngIf="isFirstPagerEnabled">
        <a
          href="javascript:void(0)"
          (click)="selectPage(1)">
          <i class="{{pagerPreviousIcon}}"></i>
        </a>
      </li>
      <li class="pager-button" [class.disabled]="!canPrevious()">
        <a
          href="javascript:void(0)"
          (click)="prevPage()">
          <i class="{{pagerLeftArrowIcon}}"></i>
        </a>
      </li>
      <li class="pager-page" [class.active]="page === 1">
        <a
          href="javascript:void(0)"
          (click)="selectPage(1)">1</a>
      </li>
      <li class="pager-separator" *ngIf="page > pages.length">...</li>
      <li class="pager-page" *ngFor="let pg of pages"
        [class.active]="pg.number === page"
        [ngClass]="{'border-left': pg.number == 2 || (pg.number > 1 && pg.number != pages[0].number)}">
          <a
            href="javascript:void(0)"
            (click)="selectPage(pg.number)"
            *ngIf="pg.number > 1 && pg.number < totalPages">{{pg.text}}</a>
      </li>
      <li class="pager-separator" *ngIf="page <= totalPages - pages.length">...</li>
      <li class="pager-page" [class.active]="page === totalPages"
        [ngClass]="{'border-left': page > totalPages - pages.length}">
        <a (click)="selectPage(totalPages)">{{totalPages}}</a>
      </li>
      <li class="pager-button" [class.disabled]="!canNext()">
        <a
          href="javascript:void(0)"
          (click)="nextPage()">
          <i class="{{pagerRightArrowIcon}}"></i>
        </a>
      </li>
      <li class="pager-button" [class.disabled]="!canNext()"
        *ngIf="isLastPagerEnabled">
        <a
          href="javascript:void(0)"
          (click)="selectPage(totalPages)">
          <i class="{{pagerNextIcon}}"></i>
        </a>
      </li>
    </ul>
  `,
  host: {
    class: 'datatable-pager'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTablePagerComponent {
  @Input() isFirstPagerEnabled: boolean;
  @Input() isLastPagerEnabled: boolean;
  @Input() pagerLeftArrowIcon: string;
  @Input() pagerRightArrowIcon: string;
  @Input() pagerPreviousIcon: string;
  @Input() pagerNextIcon: string;

  @Input()
  set size(val: number) {
    this._size = val;
    this.pages = this.calcPages();
  }

  get size(): number {
    return this._size;
  }

  @Input()
  set count(val: number) {
    this._count = val;
    this.pages = this.calcPages();
  }

  get count(): number {
    return this._count;
  }

  @Input()
  set page(val: number) {
    this._page = val;
    this.pages = this.calcPages();
  }

  get page(): number {
    return this._page;
  }

  get totalPages(): number {
    const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
    return Math.max(count || 0, 1);
  }

  @Output() change: EventEmitter<any> = new EventEmitter();

  _count: number = 0;
  _page: number = 1;
  _size: number = 0;
  pages: any;

  canPrevious(): boolean {
    return this.page > 1;
  }

  canNext(): boolean {
    return this.page < this.totalPages;
  }

  prevPage(): void {
    this.selectPage(this.page - 1);
  }

  nextPage(): void {
    this.selectPage(this.page + 1);
  }

  selectPage(page: number): void {
    if (page > 0 && page <= this.totalPages && page !== this.page) {
      this.page = page;

      this.change.emit({
        page
      });
    }
  }

  reset(): void {
    this.selectPage(1);
  }

  calcPages(page?: number): any[] {
    const pages = [];
    let startPage = 1;
    let endPage = this.totalPages;
    const maxSize = 3;
    const isMaxSized = maxSize < this.totalPages;

    page = page || this.page;

    if (isMaxSized) {
      startPage = ((Math.ceil(page / maxSize) - 1) * maxSize) + 1;
      endPage = Math.min(startPage + maxSize - 1, this.totalPages);
    }

    for (let num = startPage; num <= endPage; num++) {
      pages.push({
        number: num,
        text: <string><any>num
      });
    }

    return pages;
  }

}
