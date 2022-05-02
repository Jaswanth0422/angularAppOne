import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmployeesModule } from './employees/employees.module';
import { EmployeesComponent } from './employees/employees.component';
import { AppComponent } from './app.component';
// import { MultiplecheckboxComponent } from './newfeatures/multiplecheckbox/multiplecheckbox.component';

const routes: Routes = [
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then((m) => m.EmployeesModule) },
  // { path: 'multicheckbox', loadChildren: () => import('./newfeatures/components/multiplecheckbox/multiplecheckbox.module').then((m) => m.MultiplecheckboxModule) },
  { path: 'resumePage', loadChildren: () => import('./newfeatures/newPage/resume-page.module').then((m) => m.ResumePageModule) },


  // { path: 'multicheckbox', component: MultiplecheckboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
