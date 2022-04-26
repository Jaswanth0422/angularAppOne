import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router} from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
  providers: [EmployeeService],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeCreateComponent implements OnInit {
  private dialogRef = null;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private injector: Injector
    // private dialogRef: MatDialogRef<EmployeeCreateComponent>,

  ) {
    this.dialogRef = this.injector.get(MatDialogRef, null);
  }

  ngOnInit(): void {
    this.employeeService.getEmployeesList();
  }
  departments = [
    { id: 1, name: 'finanace' },
    { id: 2, name: 'information technology' },
    { id: 3, name: 'Human Resource' },
    { id: 4, name: 'External', disabled: true },
    { id: 5, name: 'Software Development' },

  ];
  professionalSkills = [
    { id: 5, name: 'java' },
    { id: 6, name: 'javaScript' },
    { id: 7, name: 'MangoDB' },
    { id: 8, name: 'HTML' },
  ]
  createForm = new FormGroup({
    employeeId: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("^[0-9]*$")
    ]),
    employeeTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    employeeUsername: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    employeeDepartment: new FormControl(null, []),
    employeeProfessionalSkills: new FormControl(null, [])
  });
  public createFormError = (controlName: string, errorName: string) => {
    return this.createForm.controls[controlName].hasError(errorName);
  }
  async onSubmit() {
    const employee = {
      id: this.createForm.value.employeeId,
      title: this.createForm.value.employeeTitle,
      userid: this.createForm.value.employeeUsername,
      department: this.createForm.value.employeeDepartment,
      professionalSkills: this.createForm.value.employeeProfessionalSkills,

    };

    const result = this.employeeService.createEmployee(employee)
    this.dialogRef.close()
    await result === 'successfully created employee' ? this.router.navigate(['/employees/listEmployees']) : ''
  }
  departmentChange($event) {


  }
}
