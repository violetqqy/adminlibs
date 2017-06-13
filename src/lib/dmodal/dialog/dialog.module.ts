import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdDialogModule, MdButtonModule, MdInputModule } from '@angular/material';

import { DialogComponent } from './dialog.component';

export * from './dialog.entity';
export * from './dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdDialogModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MdDialogModule,
    MdButtonModule,
    MdInputModule,
    DialogComponent
  ]
})
export class LibDialogModule {
}
