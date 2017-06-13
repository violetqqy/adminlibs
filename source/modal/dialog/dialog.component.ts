import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { DialogOptions } from './dialog.entity';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html'
})
export class DialogComponent implements OnInit {
  option: DialogOptions = new DialogOptions();
  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}

  ngOnInit() {
    this.option = this.dialogRef._containerInstance.dialogConfig.data || new DialogOptions();
  }
}