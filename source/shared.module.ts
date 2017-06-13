import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DFormModule } from './form';
import { TableModule } from './table';
import { ModalModule } from './modal';


@NgModule({
  imports: [
    CommonModule,
    DFormModule,
    TableModule,
    ModalModule
  ],
  exports: [
    CommonModule,
    DFormModule,
    TableModule,
    ModalModule
  ],
})
export class AppSharedModule {
}
