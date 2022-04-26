import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: AngularFireList<any>;
  editEmployeeObj: AngularFireObject<any>;
  constructor(private firebase: AngularFireDatabase) { }

  GetEmployee(id: string) {
    this.editEmployeeObj = this.firebase.object('employees/' + id);
    return this.editEmployeeObj;
  }
  getEmployeesList() {
    this.employeeList = this.firebase.list('/employees');

    return this.employeeList.snapshotChanges();
  };
  createEmployee(employee: { id: any; title: any; userid: any; department: any; professionalSkills: Array<string> }) {
    let result = Promise.resolve(this.employeeList.push({
      id: employee.id,
      title: employee.title,
      userid: employee.userid,
      department: employee.department,
      professionalSkills: employee.professionalSkills
    })).then(() => { return 'successfully created employee' }).catch(() => { return alert('error creating employee') })
    return result
  };
  removeEmployee(key) {
    this.employeeList.remove(key);
  };
  editEmployee(employee: { $key: string; id: any; title: any; userid: any; department: any; professionalSkills: any }) {
    this.editEmployeeObj = this.firebase.object('employees/' + employee.$key)
    let result = Promise.resolve(this.editEmployeeObj.update({
      id: employee.id,
      title: employee.title,
      userid: employee.userid,
      department: employee.department,
      professionalSkills: employee.professionalSkills
    })).then(() => { return 'Employee details edited successfully' }).catch(() => { alert('error editing employee details') })
    return result
  };
}
