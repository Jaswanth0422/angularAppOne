import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-remove-employee-modal',
  templateUrl: './remove-employee-modal.component.html',
  styleUrls: ['./remove-employee-modal.component.css']
})
export class RemoveEmployeeModalComponent implements OnInit {
@Input()employeeKey:String;
  constructor() { }

  ngOnInit(): void {
  }

}
