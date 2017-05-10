import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'client-sorting-demo',
  template: `
    <div>
      <h3>
        Client-side Sorting TEST
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/sorting/sorting-client.component.ts" target="_blank">
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columns]="columns"
        [sortType]="'multi'"
        [columnMode]="'force'"
        [headerHeight]="50"
        [pagingHeight]="50"
        [rowHeight]="50"
        [scrollbarV]="true"
        [isFilter]="true"
        [filterPlaceholder]="'Search all'"
        (filterUpdated)="updateFilter($event)">
      </ngx-datatable>
    </div>
    <template #headerTemplate let-column="column" let-sort="sortFn" let-sortClass="sortClass">
        <div (click)="sort()" [class]="sortClass">{{column.name}}
        </div>
    </template>
  `
})
export class ClientSortingComponent  implements OnInit  {
  @ViewChild('headerTemplate') headerTemplate: TemplateRef<any>;

  rows = [];
  data = [];

  columns = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      this.data = data;
    });


  }

  ngOnInit() {
    console.log('TEMPLATE = ', this.headerTemplate);
    this.columns = [
      { name: 'TEST 3', headerTemplate: this.headerTemplate },
      { name: 'Name', headerTemplate: this.headerTemplate },
      { name: 'Gender', headerTemplate: this.headerTemplate }
    ];
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }

  updateFilter(event) {
    console.log('NG4: updateFilter:', event.target.value);
    const value = event.target.value.toLowerCase();
    // If filtered value is empty, return full list
    if (!value) {
        this.rows = this.data;
        return;
    }

    const filteredRows = [];
    let temp = [];

    this.columns.forEach((column: any) => {
        temp = [];
        temp = this.data.filter((row) => {
            if (row[column.prop] !== null) {
                return row[column.prop].toLowerCase().indexOf(value) !== -1;
            }
            return false;
        });
        filteredRows.push(...temp);
    });

    // Update rows
    this.rows = filteredRows;
  }

}
