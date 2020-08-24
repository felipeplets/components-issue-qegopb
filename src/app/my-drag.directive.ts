import { Directive, Input, ElementRef } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Directive({
  selector: '[myDrag]',
  exportAs: 'myDrag',
  host: {
    class: 'cdk-drag',
    '[class.cdk-drag-disabled]': 'disabled',
    '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
  }
})
export class MyDragDirective<T> extends CdkDrag<T> {

  @Input('myDragData')
  public data: T;

  @Input('myDragBoundary')
  public boundaryElement: string | ElementRef<HTMLElement> | HTMLElement;

  @Input('myDragDisabled')
  public disabled: boolean;

}
