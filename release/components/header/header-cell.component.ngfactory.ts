/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '@angular/forms';
import * as import2 from '@angular/common';
import * as import3 from '../../../../build/components/header/header-cell.component';
const styles_DataTableHeaderCellComponent:any[] = ([] as any[]);
export const RenderType_DataTableHeaderCellComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_DataTableHeaderCellComponent,
  data: {}
}
);
function View_DataTableHeaderCellComponent_1():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),8,'label',[[
        'class',
        'datatable-checkbox'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵted((null as any),['\n        ']),
      import0.ɵeld(0,(null as any),(null as any),5,'input',[[
        'type',
        'checkbox'
      ]
    ],[
      [
        1,
        'ng-untouched'
      ]
      ,
      [
        1,
        'ng-touched'
      ]
      ,
      [
        1,
        'ng-pristine'
      ]
      ,
      [
        1,
        'ng-dirty'
      ]
      ,
      [
        1,
        'ng-valid'
      ]
      ,
      [
        1,
        'ng-invalid'
      ]
      ,
      [
        1,
        'ng-pending'
      ]

    ]
    ,[
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'change'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('change' === eventName)) {
        const pd_0:any = ((<any>import0.ɵnov(view,3).onChange($event.target.checked)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('blur' === eventName)) {
        const pd_1:any = ((<any>import0.ɵnov(view,3).onTouched()) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      if (('compositionstart' === eventName)) {
        const pd_2:any = ((<any>import0.ɵnov(view,5).compositionStart()) !== false);
        allowDefault = (pd_2 && allowDefault);
      }
      if (('compositionend' === eventName)) {
        const pd_3:any = ((<any>import0.ɵnov(view,5).compositionEnd()) !== false);
        allowDefault = (pd_3 && allowDefault);
      }
      if (('ngModelChange' === eventName)) {
        const pd_4:any = ((<any>(comp.allRowsSelected = $event)) !== false);
        allowDefault = (pd_4 && allowDefault);
      }
      if (('change' === eventName)) {
        const pd_5:any = ((<any>comp.select.emit($event.target.checked)) !== false);
        allowDefault = (pd_5 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵdid(8192,(null as any),0,import1.CheckboxControlValueAccessor,[
      import0.Renderer,
      import0.ElementRef
    ]
    ,(null as any),(null as any)),
    import0.ɵprd(512,(null as any),import1.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import1.CheckboxControlValueAccessor]),
    import0.ɵdid(335872,(null as any),0,import1.NgModel,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import1.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import0.ɵprd(1024,(null as any),import1.NgControl,(null as any),[import1.NgModel]),
    import0.ɵdid(8192,(null as any),0,import1.NgControlStatus,[import1.NgControl],(null as any),(null as any)),
    import0.ɵted((null as any),['\n      '])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.allRowsSelected;
    check(view,5,0,currVal_0);
  },(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = import0.ɵnov(view,7).ngClassUntouched;
    const currVal_1:any = import0.ɵnov(view,7).ngClassTouched;
    const currVal_2:any = import0.ɵnov(view,7).ngClassPristine;
    const currVal_3:any = import0.ɵnov(view,7).ngClassDirty;
    const currVal_4:any = import0.ɵnov(view,7).ngClassValid;
    const currVal_5:any = import0.ɵnov(view,7).ngClassInvalid;
    const currVal_6:any = import0.ɵnov(view,7).ngClassPending;
    check(view,2,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
  });
}
function View_DataTableHeaderCellComponent_2():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),4,'span',[[
        'class',
        'datatable-header-cell-wrapper'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵted((null as any),['\n        ']),
      import0.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'datatable-header-cell-label draggable'
      ]
      ],[[
        3,
        'innerHTML',
        1
      ]
      ],[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('click' === eventName)) {
        const pd_0:any = ((<any>comp.onSort()) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵted((null as any),['\n        ']),
    import0.ɵted((null as any),['\n      '])
  ]
  ,(null as any),(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.name;
    check(view,2,0,currVal_0);
  });
}
function View_DataTableHeaderCellComponent_4():import0.ɵViewDefinition {
  return import0.ɵvid(0,[import0.ɵted((null as any),['\n      '])],(null as any),(null as any));
}
function View_DataTableHeaderCellComponent_3():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵand(8388608,(null as any),(null as any),2,(null as any),View_DataTableHeaderCellComponent_4),
    import0.ɵdid(270336,(null as any),0,import2.NgTemplateOutlet,[import0.ViewContainerRef],{
      ngTemplateOutlet: [
        0,
        'ngTemplateOutlet'
      ]
      ,
      ngOutletContext: [
        1,
        'ngOutletContext'
      ]

    }
    ,(null as any)),
    import0.ɵpod([
      'column',
      'sortDir',
      'sortFn'
    ]
    ),
    import0.ɵand(0,(null as any),(null as any),0)
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.column.headerTemplate;
    const currVal_1:any = check(view,2,0,comp.column,comp.sortDir,comp.sortFn);
    check(view,1,0,currVal_0,currVal_1);
  },(null as any));
}
export function View_DataTableHeaderCellComponent_0():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵted((null as any),['\n    ']),
    import0.ɵeld(0,(null as any),(null as any),13,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵted((null as any),['\n      ']),
    import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableHeaderCellComponent_1),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import0.ɵted((null as any),['\n      ']),
    import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableHeaderCellComponent_2),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import0.ɵted((null as any),['\n      ']),
    import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableHeaderCellComponent_3),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import0.ɵted((null as any),['\n      ']),
      import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),[[
        3,
        'className',
        0
      ]
      ],[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import3.DataTableHeaderCellComponent = view.component;
      if (('click' === eventName)) {
        const pd_0:any = ((<any>comp.onSort()) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵted((null as any),['\n      ']),
    import0.ɵted((null as any),['\n    ']),
    import0.ɵted((null as any),['\n  '])
  ]
  ,(check,view) => {
    var comp:import3.DataTableHeaderCellComponent = view.component;
    const currVal_0:any = comp.isCheckboxable;
    check(view,4,0,currVal_0);
    const currVal_1:boolean = !comp.column.headerTemplate;
    check(view,7,0,currVal_1);
    const currVal_2:any = comp.column.headerTemplate;
    check(view,10,0,currVal_2);
  },(check,view) => {
    var comp:import3.DataTableHeaderCellComponent = view.component;
    const currVal_0:any = comp.sortClass;
    check(view,12,0,currVal_0);
  });
}
const RenderType_DataTableHeaderCellComponent_Host:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {}
}
);
function View_DataTableHeaderCellComponent_Host_0():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵeld(0,(null as any),(null as any),1,'datatable-header-cell',([] as any[]),[
      [
        2,
        'height',
        'px'
      ]
      ,
      [
        3,
        'className',
        0
      ]
      ,
      [
        0,
        'title',
        0
      ]
      ,
      [
        2,
        'minWidth',
        'px'
      ]
      ,
      [
        2,
        'maxWidth',
        'px'
      ]
      ,
      [
        2,
        'width',
        'px'
      ]

    ]
    ,(null as any),(null as any),View_DataTableHeaderCellComponent_0,RenderType_DataTableHeaderCellComponent),
    import0.ɵdid(24576,(null as any),0,import3.DataTableHeaderCellComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(check,view) => {
    const currVal_0:any = import0.ɵnov(view,1).headerHeight;
    const currVal_1:any = import0.ɵnov(view,1).columnCssClasses;
    const currVal_2:any = import0.ɵnov(view,1).name;
    const currVal_3:any = import0.ɵnov(view,1).minWidth;
    const currVal_4:any = import0.ɵnov(view,1).maxWidth;
    const currVal_5:any = import0.ɵnov(view,1).width;
    check(view,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5);
  });
}
export const DataTableHeaderCellComponentNgFactory:import0.ComponentFactory<import3.DataTableHeaderCellComponent> = import0.ɵccf('datatable-header-cell',import3.DataTableHeaderCellComponent,View_DataTableHeaderCellComponent_Host_0);