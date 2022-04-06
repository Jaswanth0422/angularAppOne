import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmployeesModule } from './employees/employees.module';
// import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then((m) => m.EmployeesModule) },
  // { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
