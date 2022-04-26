import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Employee,departments } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] | [] = [];
  constructor(private employeeService:EmployeeService) { }
  showRemoveModal=false;
  faPenToSquare = faPenToSquare;
  faTrash=faTrash;
  removeEmployeeKey='';

  ngOnInit(): void {
    this.employeeService.getEmployeesList().subscribe(data=>{
      let listtotal=[];
      this.employeeList=[];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        // console.log('in list',item.professionalSkills);

        listtotal.push(a)
      })
      // let spaghettiProperties = Object.keys(listtotal.professionalSkills)
      // console.log('in list',listtotal);

      this.employeeList=listtotal;

      this.employeeList.forEach(item=>{

        let keys=item.professionalSkills&&Object.keys(item.professionalSkills)
        let empDepartment=departments.find((obj)=>obj.id===Number(item.department))
        // console.log('in department',item.department,empDepartment);

        item.department=empDepartment&& empDepartment.name
        if(keys){
        console.log('in list',item.professionalSkills);
      let neededArray = []
      if(item.professionalSkills){
          for(let obj in item.professionalSkills){
            neededArray.push(item.professionalSkills[obj]);
          }
          item.professionalSkills=neededArray
        }
        // for(let prop of keys){

        //   // let skill=professionalSkills.find((obj)=>obj.id===item.professionalSkills[prop])
        //   // neededArray.push(skill.name)
        //   neededArray.push(item.professionalSkills[prop])
        //   // console.log('inskills',neededArray);

        //   item.professionalSkills=neededArray
        // }
        // item.professionalSkills=neededArray
      }

      })


    });
  }
  deleteEmployee(employeeKey){
    this.showRemoveModal=true;
    this.removeEmployeeKey=employeeKey;
    // this.employeeService.removeEmployee(employeeKey);
  }
  closeModal(value){
    this.showRemoveModal=value;

console.log('in parent',value);

  }

}
