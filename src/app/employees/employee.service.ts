import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: AngularFireList<any>;
  editEmployeeObj: AngularFireObject<any>;
  constructor(private firebase:AngularFireDatabase) { }

  GetEmployee(id: string) {
    this.editEmployeeObj = this.firebase.object('employees/' + id);
    return this.editEmployeeObj;
  }
  getEmployeesList(){
    this.employeeList=this.firebase.list('/employees');
    console.log('in service',this.employeeList)
    return this.employeeList.snapshotChanges();
  };
  createEmployee(employee: { id: any; title: any; userid: any; }){
    this.employeeList.push({
      id:employee.id,
      title:employee.title,
      userid:employee.userid,
    })
  };
  removeEmployee(employee: { $key: FirebaseOperation | undefined; }){
    this.employeeList.remove(employee.$key);
  };
  editEmployee(employee: { $key: string; id: any; title: any; userid: any; }){
    this.editEmployeeObj=this.firebase.object('employees/' + employee.$key)
    this.editEmployeeObj.update({
    id:employee.id,
    title:employee.title,
    userid:employee.userid,
   })
  };
}
