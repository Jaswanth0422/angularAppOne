import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatCardModule} from '@angular/material/card';
import { RemoveEmployeeModalComponent } from './remove-employee-modal/remove-employee-modal.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsComponent } from './charts/charts.component';
@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    RemoveEmployeeModalComponent,
    SidebarComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    // MyRouteRoutes,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgSelectModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatListModule,
    MatButtonModule,
    HighchartsChartModule
  ]
})
export class EmployeesModule { }
