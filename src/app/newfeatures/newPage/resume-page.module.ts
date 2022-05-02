import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumePageRoutingModule } from './resume-page-routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ResumePageComponent } from './resume-page.component';
import { MultiplecheckboxComponent } from './components/multiplecheckbox/multiplecheckbox.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

@NgModule({
  declarations: [
    ResumePageComponent,
    MultiplecheckboxComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    ResumePageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ResumePageModule { }
