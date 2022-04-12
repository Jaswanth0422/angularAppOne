import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  sidebarOpened:boolean=false
  // @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }
  toggleSideBar() {
    this.sidebarOpened=!this.sidebarOpened;
    this.router.navigate(['/'])
    // this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
