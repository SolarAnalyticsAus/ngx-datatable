/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './datatable.component.css.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from './filter/filter.component.ngfactory';
import * as import3 from '../../../build/components/filter/filter.component';
import * as import4 from './paging/paging.component.ngfactory';
import * as import5 from '../../../build/components/paging/paging.component';
import * as import6 from './header/header.component.ngfactory';
import * as import7 from '../../../build/components/header/header.component';
import * as import8 from './legend/legend.component.ngfactory';
import * as import9 from '../../../build/components/legend/legend.component';
import * as import10 from '../../../build/components/datatable.component';
import * as import11 from '../../../build/directives/visibility.directive';
import * as import12 from '@angular/common';
import * as import13 from './body/body.component.ngfactory';
import * as import14 from '../../../build/components/body/body.component';
const styles_DatatableComponent:any[] = [import0.styles];
export const RenderType_DatatableComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 2,
  styles: styles_DatatableComponent,
  data: {}
}
);
function View_DatatableComponent_1():import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      import1.ɵeld(0,(null as any),(null as any),1,'datatable-filter',[[
        'class',
        'datatable-filter'
      ]
      ],(null as any),[[
        (null as any),
        'updated'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('updated' === eventName)) {
        const pd_0:any = ((<any>comp.filterUpdate($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },import2.View_DataTableFilterComponent_0,import2.RenderType_DataTableFilterComponent),
    import1.ɵdid(24576,[
      [
        3,
        4
      ]
      ,
      [
        'filter',
        4
      ]

    ]
      ,0,import3.DataTableFilterComponent,([] as any[]),{placeholder: [
        0,
        'placeholder'
      ]
    },{updated: 'updated'})
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.filterPlaceholder;
    check(view,1,0,currVal_0);
  },(null as any));
}
function View_DatatableComponent_2():import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      import1.ɵeld(0,(null as any),(null as any),2,'datatable-paging',[[
        'class',
        'datatable-paging-header datatable-paging'
      ]
      ],(null as any),[[
        (null as any),
        'page'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('page' === eventName)) {
        const pd_0:any = ((<any>comp.onPagingPage($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },import4.View_DataTablePagingComponent_0,import4.RenderType_DataTablePagingComponent),
    import1.ɵdid(24576,[
      [
        4,
        4
      ]
      ,
      [
        'pagingHeader',
        4
      ]

    ]
    ,0,import5.DataTablePagingComponent,([] as any[]),{
      pagingHeight: [
        0,
        'pagingHeight'
      ]
      ,
      rowCount: [
        1,
        'rowCount'
      ]
      ,
      pageSize: [
        2,
        'pageSize'
      ]
      ,
      offset: [
        3,
        'offset'
      ]
      ,
      pagerLeftArrowIcon: [
        4,
        'pagerLeftArrowIcon'
      ]
      ,
      pagerRightArrowIcon: [
        5,
        'pagerRightArrowIcon'
      ]
      ,
      pagerPreviousIcon: [
        6,
        'pagerPreviousIcon'
      ]
      ,
      pagerNextIcon: [
        7,
        'pagerNextIcon'
      ]
      ,
      totalMessage: [
        8,
        'totalMessage'
      ]
      ,
      selectedCount: [
        9,
        'selectedCount'
      ]
      ,
      selectedMessage: [
        10,
        'selectedMessage'
      ]

    }
    ,{page: 'page'}),
    import1.ɵted((null as any),['\n      '])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.pagingHeight;
    const currVal_1:any = comp.rowCount;
    const currVal_2:any = comp.pageSize;
    const currVal_3:any = comp.offset;
    const currVal_4:any = comp.cssClasses.pagerLeftArrow;
    const currVal_5:any = comp.cssClasses.pagerRightArrow;
    const currVal_6:any = comp.cssClasses.pagerPrevious;
    const currVal_7:any = comp.cssClasses.pagerNext;
    const currVal_8:any = comp.messages.totalMessage;
    const currVal_9:any = comp.selected.length;
    const currVal_10:boolean = (!!comp.selectionType && comp.messages.selectedMessage);
    check(view,1,1,[
      currVal_0,
      currVal_1,
      currVal_2,
      currVal_3,
      currVal_4,
      currVal_5,
      currVal_6,
      currVal_7,
      currVal_8,
      currVal_9,
      currVal_10
    ]
    );
  },(null as any));
}
function View_DatatableComponent_3():import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      import1.ɵeld(0,(null as any),(null as any),2,'datatable-header',[[
        'class',
        'datatable-header'
      ]
    ],[
      [
        2,
        'height',
        (null as any)
      ]
      ,
      [
        2,
        'width',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'sort'
      ]
      ,
      [
        (null as any),
        'resize'
      ]
      ,
      [
        (null as any),
        'reorder'
      ]
      ,
      [
        (null as any),
        'select'
      ]

    ]
    ,(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('sort' === eventName)) {
        const pd_0:any = ((<any>comp.onColumnSort($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('resize' === eventName)) {
        const pd_1:any = ((<any>comp.onColumnResize($event)) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      if (('reorder' === eventName)) {
        const pd_2:any = ((<any>comp.onColumnReorder($event)) !== false);
        allowDefault = (pd_2 && allowDefault);
      }
      if (('select' === eventName)) {
        const pd_3:any = ((<any>comp.onHeaderSelect($event)) !== false);
        allowDefault = (pd_3 && allowDefault);
      }
      return allowDefault;
    },import6.View_DataTableHeaderComponent_0,import6.RenderType_DataTableHeaderComponent),
    import1.ɵdid(24576,[
      [
        1,
        4
      ]
      ,
      [
        'header',
        4
      ]

    ]
    ,0,import7.DataTableHeaderComponent,([] as any[]),{
      sortAscendingIcon: [
        0,
        'sortAscendingIcon'
      ]
      ,
      sortDescendingIcon: [
        1,
        'sortDescendingIcon'
      ]
      ,
      scrollbarH: [
        2,
        'scrollbarH'
      ]
      ,
      innerWidth: [
        3,
        'innerWidth'
      ]
      ,
      offsetX: [
        4,
        'offsetX'
      ]
      ,
      sorts: [
        5,
        'sorts'
      ]
      ,
      sortType: [
        6,
        'sortType'
      ]
      ,
      allRowsSelected: [
        7,
        'allRowsSelected'
      ]
      ,
      selectionType: [
        8,
        'selectionType'
      ]
      ,
      reorderable: [
        9,
        'reorderable'
      ]
      ,
      headerHeight: [
        10,
        'headerHeight'
      ]
      ,
      columns: [
        11,
        'columns'
      ]

    }
    ,{
      sort: 'sort',
      reorder: 'reorder',
      resize: 'resize',
      select: 'select'
    }
    ),
    import1.ɵted((null as any),['\n      '])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.cssClasses.sortAscending;
    const currVal_1:any = comp.cssClasses.sortDescending;
    const currVal_2:any = comp.scrollbarH;
    const currVal_3:any = comp.innerWidth;
    const currVal_4:any = comp.offsetX;
    const currVal_5:any = comp.sorts;
    const currVal_6:any = comp.sortType;
    const currVal_7:any = comp.allRowsSelected;
    const currVal_8:any = comp.selectionType;
    const currVal_9:any = comp.reorderable;
    const currVal_10:any = comp.headerHeight;
    const currVal_11:any = comp.columns;
    check(view,1,1,[
      currVal_0,
      currVal_1,
      currVal_2,
      currVal_3,
      currVal_4,
      currVal_5,
      currVal_6,
      currVal_7,
      currVal_8,
      currVal_9,
      currVal_10,
      currVal_11
    ]
    );
  },(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = import1.ɵnov(view,1).headerHeight;
    const currVal_1:any = import1.ɵnov(view,1).headerWidth;
    check(view,0,0,currVal_0,currVal_1);
  });
}
function View_DatatableComponent_4():import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      import1.ɵeld(0,(null as any),(null as any),2,'datatable-legend',[[
        'class',
        'datatable-legend'
      ]
    ],(null as any),(null as any),(null as any),import8.View_DataTableLegendComponent_0,import8.RenderType_DataTableLegendComponent),
      import1.ɵdid(24576,(null as any),0,import9.DataTableLegendComponent,([] as any[]),{legends: [
        0,
        'legends'
      ]
    },(null as any)),
    import1.ɵted((null as any),['\n      '])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.legends;
    check(view,1,0,currVal_0);
  },(null as any));
}
function View_DatatableComponent_5():import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      import1.ɵeld(0,(null as any),(null as any),2,'datatable-paging',[[
        'class',
        'datatable-paging-footer datatable-paging'
      ]
      ],(null as any),[[
        (null as any),
        'page'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('page' === eventName)) {
        const pd_0:any = ((<any>comp.onPagingPage($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },import4.View_DataTablePagingComponent_0,import4.RenderType_DataTablePagingComponent),
    import1.ɵdid(24576,[
      [
        5,
        4
      ]
      ,
      [
        'pagingFooter',
        4
      ]

    ]
    ,0,import5.DataTablePagingComponent,([] as any[]),{
      pagingHeight: [
        0,
        'pagingHeight'
      ]
      ,
      rowCount: [
        1,
        'rowCount'
      ]
      ,
      pageSize: [
        2,
        'pageSize'
      ]
      ,
      offset: [
        3,
        'offset'
      ]
      ,
      pagerLeftArrowIcon: [
        4,
        'pagerLeftArrowIcon'
      ]
      ,
      pagerRightArrowIcon: [
        5,
        'pagerRightArrowIcon'
      ]
      ,
      pagerPreviousIcon: [
        6,
        'pagerPreviousIcon'
      ]
      ,
      pagerNextIcon: [
        7,
        'pagerNextIcon'
      ]
      ,
      totalMessage: [
        8,
        'totalMessage'
      ]
      ,
      selectedCount: [
        9,
        'selectedCount'
      ]
      ,
      selectedMessage: [
        10,
        'selectedMessage'
      ]

    }
    ,{page: 'page'}),
    import1.ɵted((null as any),['\n      '])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.pagingHeight;
    const currVal_1:any = comp.rowCount;
    const currVal_2:any = comp.pageSize;
    const currVal_3:any = comp.offset;
    const currVal_4:any = comp.cssClasses.pagerLeftArrow;
    const currVal_5:any = comp.cssClasses.pagerRightArrow;
    const currVal_6:any = comp.cssClasses.pagerPrevious;
    const currVal_7:any = comp.cssClasses.pagerNext;
    const currVal_8:any = comp.messages.totalMessage;
    const currVal_9:any = comp.selected.length;
    const currVal_10:boolean = (!!comp.selectionType && comp.messages.selectedMessage);
    check(view,1,1,[
      currVal_0,
      currVal_1,
      currVal_2,
      currVal_3,
      currVal_4,
      currVal_5,
      currVal_6,
      currVal_7,
      currVal_8,
      currVal_9,
      currVal_10
    ]
    );
  },(null as any));
}
export function View_DatatableComponent_0():import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    import1.ɵqud(335544320,1,{header: 0}),
    import1.ɵqud(201326592,2,{body: 0}),
    import1.ɵqud(335544320,3,{filter: 0}),
    import1.ɵqud(335544320,4,{pagingHeader: 0}),
    import1.ɵqud(335544320,5,{pagingFooter: 0}),
    import1.ɵqud(201326592,6,{bodyComponent: 0}),
    import1.ɵted((null as any),['\n    ']),
      import1.ɵeld(0,(null as any),(null as any),21,'div',[[
        'visibility-observer',
        ''
      ]
      ],[[
        1,
        'visible'
      ]
      ],[[
        (null as any),
        'visible'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import10.DatatableComponent = view.component;
      if (('visible' === eventName)) {
        const pd_0:any = ((<any>comp.recalculate()) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import1.ɵdid(106496,(null as any),0,import11.VisibilityDirective,[
      import1.ElementRef,
      import1.NgZone
    ]
    ,(null as any),{visible: 'visible'}),
    import1.ɵted((null as any),['\n      ']),
    import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DatatableComponent_1),
    import1.ɵdid(8192,(null as any),0,import12.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import1.ɵted((null as any),['\n      ']),
    import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DatatableComponent_2),
    import1.ɵdid(8192,(null as any),0,import12.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import1.ɵted((null as any),['\n      ']),
    import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DatatableComponent_3),
    import1.ɵdid(8192,(null as any),0,import12.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import1.ɵted((null as any),['\n      ']),
      import1.ɵeld(0,(null as any),(null as any),2,'datatable-body',[[
        'class',
        'datatable-body'
      ]
    ],[
      [
        2,
        'width',
        (null as any)
      ]
      ,
      [
        2,
        'height',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'page'
      ]
      ,
      [
        (null as any),
        'activate'
      ]
      ,
      [
        (null as any),
        'rowContextmenu'
      ]
      ,
      [
        (null as any),
        'select'
      ]
      ,
      [
        (null as any),
        'scroll'
      ]

    ]
    ,(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import10.DatatableComponent = view.component;
      if (('page' === eventName)) {
        const pd_0:any = ((<any>comp.onBodyPage($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('activate' === eventName)) {
        const pd_1:any = ((<any>comp.activate.emit($event)) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      if (('rowContextmenu' === eventName)) {
        const pd_2:any = ((<any>comp.rowContextmenu.emit($event)) !== false);
        allowDefault = (pd_2 && allowDefault);
      }
      if (('select' === eventName)) {
        const pd_3:any = ((<any>comp.onBodySelect($event)) !== false);
        allowDefault = (pd_3 && allowDefault);
      }
      if (('scroll' === eventName)) {
        const pd_4:any = ((<any>comp.onBodyScroll($event)) !== false);
        allowDefault = (pd_4 && allowDefault);
      }
      return allowDefault;
    },import13.View_DataTableBodyComponent_0,import13.RenderType_DataTableBodyComponent),
    import1.ɵdid(122880,[
      [
        6,
        4
      ]
      ,
      [
        2,
        4
      ]
      ,
      [
        'body',
        4
      ]

    ]
    ,0,import14.DataTableBodyComponent,([] as any[]),{
      scrollbarV: [
        0,
        'scrollbarV'
      ]
      ,
      scrollbarH: [
        1,
        'scrollbarH'
      ]
      ,
      loadingIndicator: [
        2,
        'loadingIndicator'
      ]
      ,
      rowHeight: [
        3,
        'rowHeight'
      ]
      ,
      offsetX: [
        4,
        'offsetX'
      ]
      ,
      emptyMessage: [
        5,
        'emptyMessage'
      ]
      ,
      selectionType: [
        6,
        'selectionType'
      ]
      ,
      selected: [
        7,
        'selected'
      ]
      ,
      rowIdentity: [
        8,
        'rowIdentity'
      ]
      ,
      rowDetail: [
        9,
        'rowDetail'
      ]
      ,
      selectCheck: [
        10,
        'selectCheck'
      ]
      ,
      trackByProp: [
        11,
        'trackByProp'
      ]
      ,
      rowClass: [
        12,
        'rowClass'
      ]
      ,
      pageSize: [
        13,
        'pageSize'
      ]
      ,
      rows: [
        14,
        'rows'
      ]
      ,
      columns: [
        15,
        'columns'
      ]
      ,
      offset: [
        16,
        'offset'
      ]
      ,
      rowCount: [
        17,
        'rowCount'
      ]
      ,
      innerWidth: [
        18,
        'innerWidth'
      ]
      ,
      bodyHeight: [
        19,
        'bodyHeight'
      ]

    }
    ,{
      scroll: 'scroll',
      page: 'page',
      activate: 'activate',
      select: 'select',
      rowContextmenu: 'rowContextmenu'
    }
    ),
    import1.ɵted((null as any),['\n      ']),
    import1.ɵted((null as any),['\n      ']),
    import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DatatableComponent_4),
    import1.ɵdid(8192,(null as any),0,import12.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import1.ɵted((null as any),['\n      ']),
    import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DatatableComponent_5),
    import1.ɵdid(8192,(null as any),0,import12.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import1.ɵted((null as any),['\n    ']),
    import1.ɵted((null as any),['\n  '])
  ]
  ,(check,view) => {
    var comp:import10.DatatableComponent = view.component;
    check(view,8,0);
    const currVal_0:any = comp.isFilter;
    check(view,11,0,currVal_0);
    const currVal_1:any = comp.isPagingHeader;
    check(view,14,0,currVal_1);
    const currVal_2:any = comp.headerHeight;
    check(view,17,0,currVal_2);
    const currVal_3:any = comp.scrollbarV;
    const currVal_4:any = comp.scrollbarH;
    const currVal_5:any = comp.loadingIndicator;
    const currVal_6:any = comp.rowHeight;
    const currVal_7:any = comp.offsetX;
    const currVal_8:any = comp.messages.emptyMessage;
    const currVal_9:any = comp.selectionType;
    const currVal_10:any = comp.selected;
    const currVal_11:any = comp.rowIdentity;
    const currVal_12:any = comp.rowDetail;
    const currVal_13:any = comp.selectCheck;
    const currVal_14:any = comp.trackByProp;
    const currVal_15:any = comp.rowClass;
    const currVal_16:any = comp.pageSize;
    const currVal_17:any = comp.rows;
    const currVal_18:any = comp.columns;
    const currVal_19:any = comp.offset;
    const currVal_20:any = comp.rowCount;
    const currVal_21:any = comp.innerWidth;
    const currVal_22:any = comp.bodyHeight;
    check(view,20,1,[
      currVal_3,
      currVal_4,
      currVal_5,
      currVal_6,
      currVal_7,
      currVal_8,
      currVal_9,
      currVal_10,
      currVal_11,
      currVal_12,
      currVal_13,
      currVal_14,
      currVal_15,
      currVal_16,
      currVal_17,
      currVal_18,
      currVal_19,
      currVal_20,
      currVal_21,
      currVal_22
    ]
    );
    const currVal_23:any = comp.isLegend;
    check(view,24,0,currVal_23);
    const currVal_24:any = comp.isPagingFooter;
    check(view,27,0,currVal_24);
  },(check,view) => {
    var comp:import10.DatatableComponent = view.component;
    const currVal_0:any = import1.ɵnov(view,8).isVisible;
    check(view,7,0,currVal_0);
    const currVal_1:any = import1.ɵnov(view,20).bodyWidth;
    const currVal_2:any = import1.ɵnov(view,20).bodyHeight;
    check(view,19,0,currVal_1,currVal_2);
  });
}
const RenderType_DatatableComponent_Host:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {}
}
);
function View_DatatableComponent_Host_0():import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      import1.ɵeld(0,(null as any),(null as any),3,'ngx-datatable',[[
        'class',
        'ngx-datatable'
      ]
    ],[
      [
        1,
        'fixed-header'
      ]
      ,
      [
        1,
        'fixed-row'
      ]
      ,
      [
        1,
        'scroll-vertical'
      ]
      ,
      [
        1,
        'scroll-horz'
      ]
      ,
      [
        1,
        'selectable'
      ]
      ,
      [
        1,
        'checkbox-selection'
      ]
      ,
      [
        1,
        'cell-selection'
      ]
      ,
      [
        1,
        'single-selection'
      ]
      ,
      [
        1,
        'multi-selection'
      ]
      ,
      [
        1,
        'multi-click-selection'
      ]

    ]
      ,[[
        'window',
        'resize'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      if (('window:resize' === eventName)) {
        const pd_0:any = ((<any>import1.ɵnov(view,1).onWindowResize()) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },View_DatatableComponent_0,RenderType_DatatableComponent),
    import1.ɵdid(2285568,(null as any),2,import10.DatatableComponent,[
      import1.ElementRef,
      import1.KeyValueDiffers
    ]
    ,(null as any),(null as any)),
    import1.ɵqud(301989888,1,{columnTemplates: 1}),
    import1.ɵqud(301989888,2,{rowDetail: 0})
  ]
  ,(check,view) => {
    check(view,1,0);
  },(check,view) => {
    const currVal_0:any = import1.ɵnov(view,1).isFixedHeader;
    const currVal_1:any = import1.ɵnov(view,1).isFixedRow;
    const currVal_2:any = import1.ɵnov(view,1).isVertScroll;
    const currVal_3:any = import1.ɵnov(view,1).isHorScroll;
    const currVal_4:any = import1.ɵnov(view,1).isSelectable;
    const currVal_5:any = import1.ɵnov(view,1).isCheckboxSelection;
    const currVal_6:any = import1.ɵnov(view,1).isCellSelection;
    const currVal_7:any = import1.ɵnov(view,1).isSingleSelection;
    const currVal_8:any = import1.ɵnov(view,1).isMultiSelection;
    const currVal_9:any = import1.ɵnov(view,1).isMultiClickSelection;
    check(view,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9);
  });
}
export const DatatableComponentNgFactory:import1.ComponentFactory<import10.DatatableComponent> = import1.ɵccf('ngx-datatable',import10.DatatableComponent,View_DatatableComponent_Host_0);