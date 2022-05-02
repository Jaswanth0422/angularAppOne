import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {
  checkboxData={
    skills: [
    { name: 'JS',  selected: true, id: 12 },
    { name: 'CSS',  selected: false, id: 2 },
  ]
  }
  constructor() { }

  ngOnInit(): void {
    console.log('called here',this.checkboxData);

  }

}
