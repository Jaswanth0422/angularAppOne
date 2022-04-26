import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee, departments, professionalSkills } from './employee';
import { RemoveEmployeeModalComponent } from './remove-employee-modal/remove-employee-modal.component';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  sidebarOpened: boolean = false

  employeeList: Employee[] | [] = [];
  constructor(private employeeService: EmployeeService) { }
  showRemoveModal = false;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;

  ngOnInit(): void {
    // this.employeeService.getEmployeesList().subscribe(data => {
    //   let listtotal = [];
    //   this.employeeList = [];
    //   data.forEach(item => {
    //     let a = item.payload.toJSON();
    //     a['$key'] = item.key;
    //     listtotal.push(a)
    //   })

    //   this.employeeList = listtotal;

    //   this.employeeList.forEach(item => {

    //     let keys = item.professionalSkills && Object.keys(item.professionalSkills)
    //     let empDepartment = departments.find((obj) => obj.id === Number(item.department))

    //     item.department = empDepartment && empDepartment.name
    //     if (keys) {

    //       let neededArray = []
    //       if (item.professionalSkills) {
    //         for (let obj in item.professionalSkills) {
    //           neededArray.push(item.professionalSkills[obj]);
    //         }
    //         item.professionalSkills = neededArray
    //       }
    //     }

    //   })


    // });
  }
  // deleteEmployee(employeeKey) {
  //   this.showRemoveModal = true;
  //   // this.employeeService.removeEmployee(employeeKey);
  // }
  toggleSideBar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

}
