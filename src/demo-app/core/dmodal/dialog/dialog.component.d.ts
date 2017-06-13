import { OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { DialogOptions } from './dialog.entity';
export declare class DialogComponent implements OnInit {
    dialogRef: MdDialogRef<DialogComponent>;
    option: DialogOptions;
    constructor(dialogRef: MdDialogRef<DialogComponent>);
    ngOnInit(): void;
}
