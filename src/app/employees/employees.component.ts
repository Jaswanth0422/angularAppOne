import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import {Employee} from './employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeeService]
})
export class EmployeesComponent implements OnInit {
  employeeList: Employee[] | [] = [];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployeesList().subscribe(data=>{
      let listtotal=[];
      this.employeeList=[];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;

        listtotal.push(a)
      })
      this.employeeList=listtotal;

    });
  }

}
