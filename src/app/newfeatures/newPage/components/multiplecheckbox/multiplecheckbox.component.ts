import { Component, OnInit,Input } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormBuilder,FormGroup,Validators, FormArray,FormControl} from '@angular/forms';
@Component({
  selector: 'app-multiplecheckbox',
  template: `
   <form [formGroup]="form" (submit)="submit(form.value)">
     <div *ngFor="let skill of skills.controls; let i=index">
       <input type="checkbox" [formControl]="skill"/>{{user.skills[i].name}}
     </div>
     <button type="submit">Submit</button>
   </form>

   {{ form.value | json }}
  `,
  styleUrls: ['./multiplecheckbox.component.css']
})
export class MultiplecheckboxComponent implements OnInit {
  @Input() inputData:any
  user
  form;
  // datacheck=new FormControl();

  // public formControl1: FormControl;
  constructor(private fb: FormBuilder) {
//   this.user = this.inputData

//     this.form = this.fb.group({
//     skills: this.buildSkills()
//   });
//   // console.log(this.form.get("skills"))
//   this.form = new FormGroup({
//     skills: new FormArray([
//        new FormControl(true),
//        new FormControl(false),
//     ])
//  })
}


  ngOnInit(): void {
    this.user = this.inputData

    this.form = this.fb.group({
    skills: this.buildSkills()
  });
  // console.log(this.form.get("skills"))
  this.form = new FormGroup({
    skills: new FormArray([
       new FormControl(true),
       new FormControl(false),
    ])
 })
    console.log('i ');
  //     this.form = this.fb.group({
  //   skills: this.buildSkills()
  // });

    console.log('in multi check',this.inputData)

  }
  get skills() {
    return this.form.get('skills');
  };

  buildSkills() {

    const arr = this.user.skills.map(s => {
      return new FormControl(s.selected);
      // return this.fb.group({
      //   selected: [s.selected],
      //   id: [s.id]
      // }
    })
    return this.fb.array(arr);
  }

  submit(value) {

    const f = Object.assign({}, value, {
      skills: value.skills.map((s, i) => {
      return {
        id: this.user.skills[i].id,
        selected: s
      }
    })
    })

  }


}
