import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
  providers: [EmployeeService]
})
export class EmployeeEditComponent implements OnInit {
  // editForm: FormGroup;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');

    // this.employeeService.GetEmployee(id);
    this.employeeService
      .GetEmployee(id)
      .valueChanges()
      .subscribe((data) => {
        let formObject = { 'employeeId': '', 'employeeTitle': '', 'employeeUsername': '' };
        formObject.employeeId = data.id;
        formObject.employeeTitle = data.title;
        formObject.employeeUsername = data.userid;
        this.editForm.setValue(formObject);
      });

  }
  get employeeId() {
    return this.editForm.get('employeeId')
  }
  get employeeTitle() {
    return this.editForm.get('employeeTitle')
  }
  get employeeUsername() {
    return this.editForm.get('employeeUsername')
  }
  editForm = new FormGroup({
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
  });
  // getErrorMessage() {
  //   console.log('in error', this.employeeId.errors)
  //   // if (element==='employeeId') {
  //     return this.employeeId.hasError('required') ? 'You must enter a value' :
  //       this.employeeId.hasError('minlength') ? 'Employee id should be more that 2 digits' :
  //       this.employeeId.hasError('pattern') ? 'Employee id should be numeric' :
  //         '';
  //   // }
  //   // if (this.employeeTitle.errors) {
  //   //   return this.employeeTitle.hasError('required') ? 'You must enter a value' :
  //   //     this.employeeTitle.hasError('minlength') ? 'Employee id should be more that 2 digits' :
  //   //       '';
  //   // }
  //   // if (this.employeeUsername.errors) {
  //   //   return this.employeeUsername.hasError('required') ? 'You must enter a value' :
  //   //     this.employeeUsername.hasError('minlength') ? 'Employee id should be more that 2 digits' :
  //   //       '';
  //   // }
  //   return'';
  // }

  public editFormError = (controlName: string, errorName: string) =>{
    return this.editForm.controls[controlName].hasError(errorName);
    }

  onSubmit() {
    let editedData = { '$key':'','id': '', 'title': '', 'userid': '' }
    editedData.$key=this.actRoute.snapshot.paramMap.get('id')
    editedData.id = this.editForm.value.employeeId;
    editedData.title = this.editForm.value.employeeTitle;
    editedData.userid = this.editForm.value.employeeUsername;
    this.employeeService.editEmployee(editedData);
   }

}
