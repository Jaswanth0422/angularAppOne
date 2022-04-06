import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [

  {
    path: 'employees', component: EmployeesComponent,
    children: [
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
