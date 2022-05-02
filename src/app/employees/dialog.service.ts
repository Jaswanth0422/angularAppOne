import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogComponent } from './dialog/dialog.component';
import { ConfirmDialogData } from '../confirm-dialog-data';
// import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component'
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ChartsComponent } from './charts/charts.component';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  confirmDialog(data: ConfirmDialogData): Observable<boolean> {
    return this.dialog
      .open(EmployeeCreateComponent, {
        width: '400px',
        disableClose: true,
      })
      .afterClosed();
  }
  editdialog(){
    
  }
}
