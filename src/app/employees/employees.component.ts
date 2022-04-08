import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import {Employee,departments,professionalSkills} from './employee';
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
    this.employeeService.removeEmployee(employeeKey);
  }

}
