import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [

  {
    path: '', component: EmployeesComponent,
    children: [
      {
        path: 'listEmployees', component: EmployeeListComponent,
      },
      { path: 'createEmployee', component: EmployeeCreateComponent },
      { path: 'editEmployee/:id', component: EmployeeEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
