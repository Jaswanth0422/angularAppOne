import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from '../../confirm-dialog-data';

@Component({
  selector: 'app-confirm',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {}

  ngOnInit(): void {}
}
