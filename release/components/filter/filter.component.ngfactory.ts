/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '../../../../build/components/filter/filter.component';
import * as import2 from '@angular/forms';
const styles_DataTableFilterComponent:any[] = ([] as any[]);
export const RenderType_DataTableFilterComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_DataTableFilterComponent,
  data: {}
}
);
export function View_DataTableFilterComponent_0():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵted((null as any),['\n    ']),
    import0.ɵeld(0,(null as any),(null as any),10,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵted((null as any),['\n        ']),
      import0.ɵeld(0,(null as any),(null as any),5,'input',[[
        'type',
        'text'
      ]
    ],[
      [
        3,
        'placeholder',
        0
      ]
      ,
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
        'keyup'
      ]
      ,
      [
        (null as any),
        'ngModelChange'
      ]
      ,
      [
        (null as any),
        'input'
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
      var comp:import1.DataTableFilterComponent = view.component;
      if (('input' === eventName)) {
        const pd_0:any = ((<any>import0.ɵnov(view,4).onChange($event.target.value)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      if (('blur' === eventName)) {
        const pd_1:any = ((<any>import0.ɵnov(view,4).onTouched()) !== false);
        allowDefault = (pd_1 && allowDefault);
      }
      if (('compositionstart' === eventName)) {
        const pd_2:any = ((<any>import0.ɵnov(view,6).compositionStart()) !== false);
        allowDefault = (pd_2 && allowDefault);
      }
      if (('compositionend' === eventName)) {
        const pd_3:any = ((<any>import0.ɵnov(view,6).compositionEnd()) !== false);
        allowDefault = (pd_3 && allowDefault);
      }
      if (('keyup' === eventName)) {
        const pd_4:any = ((<any>comp.update($event)) !== false);
        allowDefault = (pd_4 && allowDefault);
      }
      if (('ngModelChange' === eventName)) {
        const pd_5:any = ((<any>(comp.filter = $event)) !== false);
        allowDefault = (pd_5 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵdid(8192,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef
    ]
    ,(null as any),(null as any)),
    import0.ɵprd(512,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdid(335872,(null as any),0,import2.NgModel,[
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
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{model: [
        0,
        'model'
      ]
    },{update: 'ngModelChange'}),
    import0.ɵprd(1024,(null as any),import2.NgControl,(null as any),[import2.NgModel]),
    import0.ɵdid(8192,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    import0.ɵted((null as any),['\n        ']),
      import0.ɵeld(0,(null as any),(null as any),0,'i',[[
        'class',
        'icon-search'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵted((null as any),['\n    ']),
    import0.ɵted((null as any),['\n    '])
  ]
  ,(check,view) => {
    var comp:import1.DataTableFilterComponent = view.component;
    const currVal_0:any = comp.filter;
    check(view,6,0,currVal_0);
  },(check,view) => {
    var comp:import1.DataTableFilterComponent = view.component;
    const currVal_0:any = comp.placeholder;
    const currVal_1:any = import0.ɵnov(view,8).ngClassUntouched;
    const currVal_2:any = import0.ɵnov(view,8).ngClassTouched;
    const currVal_3:any = import0.ɵnov(view,8).ngClassPristine;
    const currVal_4:any = import0.ɵnov(view,8).ngClassDirty;
    const currVal_5:any = import0.ɵnov(view,8).ngClassValid;
    const currVal_6:any = import0.ɵnov(view,8).ngClassInvalid;
    const currVal_7:any = import0.ɵnov(view,8).ngClassPending;
    check(view,3,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7);
  });
}
const RenderType_DataTableFilterComponent_Host:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {}
}
);
function View_DataTableFilterComponent_Host_0():import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      import0.ɵeld(0,(null as any),(null as any),1,'datatable-filter',[[
        'class',
        'datatable-filter'
      ]
    ],(null as any),(null as any),(null as any),View_DataTableFilterComponent_0,RenderType_DataTableFilterComponent),
    import0.ɵdid(24576,(null as any),0,import1.DataTableFilterComponent,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const DataTableFilterComponentNgFactory:import0.ComponentFactory<import1.DataTableFilterComponent> = import0.ɵccf('datatable-filter',import1.DataTableFilterComponent,View_DataTableFilterComponent_Host_0);