import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdIconModule } from '@angular/material';

import { DTableComponent } from './dtable.component';

export * from './dtable.entity';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [
    DTableComponent
  ],
  exports: [
    CommonModule,
    MdButtonModule,
    MdIconModule,
    DTableComponent,
  ]
})
export class DTableModule {
}
