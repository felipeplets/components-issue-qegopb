import { Directive, Input, Output, EventEmitter, InjectionToken } from '@angular/core';
import {
  CdkDropList,
  CdkDragDrop,
  CDK_DROP_LIST,
//  ɵangular_material_src_cdk_drag_drop_drag_drop_b
} from '@angular/cdk/drag-drop';

@Directive({
  selector: '[myDropList]',
  exportAs: 'myDropList',
  providers: [
    {
      provide: CDK_DROP_LIST,
      // provide: ɵangular_material_src_cdk_drag_drop_drag_drop_b,
      useExisting: MyDropListDirective
    },
  ],
  host: {
    class: 'cdk-drop-list',
    '[id]': 'id',
    '[class.cdk-drop-list-disabled]': 'disabled',
    '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
    '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
  }
})
export class MyDropListDirective<T = any> extends CdkDropList<T> {

  @Input('myDropListData')
  public data: T;

  @Output('myDropListDropped')
  public dropped: EventEmitter<CdkDragDrop<T, any>> = new EventEmitter<CdkDragDrop<T, any>>();

  @Input()
  get myDropListDisabled() {
    return this.disabled;
  }
  set myDropListDisabled(value: boolean) {
    this.disabled = value;
  }
}
