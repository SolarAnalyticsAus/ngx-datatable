import {
  async,
  TestBed
} from '@angular/core/testing';

import {
  DataTablePagingComponent,
  DataTablePagerComponent
} from '.';
import {By} from "@angular/platform-browser";

describe('DataTablePagingComponent', () => {
  let fixture;
  let component: DataTablePagingComponent;
  let element;

  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DataTablePagingComponent,
        DataTablePagerComponent
      ]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(DataTablePagingComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
    });
  }));

  describe('fixture', () => {
    it('component is created', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('when the component has a selectionMessage set', () => {

    beforeEach(() => {
      // setup for the template
      component.rowCount = 9;

      component.selectedMessage = 'selected';
      component.selectedCount = 3;

      fixture.detectChanges();
    });

    it('then the selectionCount is shown', () => {
      let selectedElement = fixture.debugElement.query(By.css('.page-count>span'));

      expect(selectedElement.nativeElement.innerHTML.trim()).toBe('3 selected /');
    });
  });

  describe('when the component does not have a selectionMessage set', () => {

    beforeEach(() => {
      // setup for the template
      component.rowCount = 9;
      component.selectedCount = 3;

      fixture.detectChanges();
    });

    it('then the selectionCount is shown', () => {
      let selectedElement = fixture.debugElement.query(By.css('.page-count>span'));

      expect(selectedElement).toBeNull();
    });
  });
});
