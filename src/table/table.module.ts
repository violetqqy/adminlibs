import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdIconModule } from '@angular/material';

import { TableComponent } from './table.component';

export * from './table.entity';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent,
    MdButtonModule,
    MdIconModule
  ]
})
export class TableModule {
}
