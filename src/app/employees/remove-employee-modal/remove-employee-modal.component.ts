import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-remove-employee-modal',
  templateUrl: './remove-employee-modal.component.html',
  styleUrls: ['./remove-employee-modal.component.css']
})
export class RemoveEmployeeModalComponent implements OnInit {
  @Input() employeeKey: String;
  @Output() cancelEvent = new EventEmitter<boolean>();
  constructor(
    private employeeService: EmployeeService,

  ) { }

  ngOnInit(): void {
    
  }
  removeEmployee() {
    this.employeeService.removeEmployee(this.employeeKey);
    this.cancelEvent.emit(false);

  }
  cancelHandler() {
    this.cancelEvent.emit(false);
  }

}
