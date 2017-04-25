import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdDialogModule, MdButtonModule, MdInputModule } from '@angular/material';

import { DialogComponent } from './modal';
import { ModalFullComponent } from './modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    MdDialogModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [
    DialogComponent,
    ModalFullComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MdDialogModule,
    DialogComponent,
    ModalFullComponent
  ],
  entryComponents: [DialogComponent]
})
export class AppSharedModule {
}
