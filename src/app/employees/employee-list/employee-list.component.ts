import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrash, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Employee, departments } from '../employee';
import { EmployeeService } from '../employee.service';
import { DialogService } from '../dialog.service';
import { EmployeeCreateComponent } from '../employee-create/employee-create.component';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] | [] = [];
  constructor(private employeeService: EmployeeService, private dialogService: DialogService) { }
  showRemoveModal = false;
  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faAddressCard = faAddressCard;
  removeEmployeeKey = '';

  ngOnInit(): void {
    this.employeeService.getEmployeesList().subscribe(data => {
      let listtotal = [];
      this.employeeList = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        listtotal.push(a)
      })

      this.employeeList = listtotal;

      this.employeeList.forEach(item => {

        let keys = item.professionalSkills && Object.keys(item.professionalSkills)
        let empDepartment = departments.find((obj) => obj.id === Number(item.department))

        item.department = empDepartment && empDepartment.name
        if (keys) {

          let neededArray = []
          if (item.professionalSkills) {
            for (let obj in item.professionalSkills) {
              neededArray.push(item.professionalSkills[obj]);
            }
            item.professionalSkills = neededArray
          }
        }
      })
    });
  }
  deleteEmployee(employeeKey) {
    this.showRemoveModal = true;
    this.removeEmployeeKey = employeeKey;
    // this.employeeService.removeEmployee(employeeKey);
  }
  closeModal(value) {
    this.showRemoveModal = value;
  }
  openCreateModal() {
    this.dialogService
      .confirmDialog({
        title: 'Are you sure?',
        message: 'Are you sure you want to do this?',
        confirmCaption: 'Yes',
        cancelCaption: 'No',
      })
      .subscribe((yes) => {
        if (yes) console.log('The user said YES');
      });
  }
  ngDoCheck() {
    console.log('called in list ngdocheck');

  }
  ngOnChanges() {
    console.log('in list ng changes');

  }

}
