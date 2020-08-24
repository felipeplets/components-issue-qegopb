import { Component, ViewChild } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop/';
import { MyDropListDirective } from './my-drop-list.directive';

@Component({
  selector: 'example-component',
  templateUrl: 'example-component.html',
  styleUrls: ['example-component.css'],
})
export class ExampleComponent {
  public items: { name: string, disabled: boolean }[] = [
    { name: 'Item 1', disabled: true },
    { name: 'Item 2', disabled: false },
    { name: 'Item 3', disabled: false },
    { name: 'Item 4', disabled: false },
    { name: 'Item 5', disabled: false }
  ];

  @ViewChild(MyDropListDirective, {static: true})
  public myDropListDirective: MyDropListDirective;

  public dropEvent: CdkDragDrop<{name: string, disabled:string}, any>;

  public onItemDropped(event: any) {
    this.dropEvent = event;
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */