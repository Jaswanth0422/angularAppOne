import { Component, OnInit } from '@angular/core';
import { UploadFileService } from './upload-file.service';
import { FileUpload } from './file-upload';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  constructor(private uploadService: UploadFileService) { }
  ngOnInit(): void {
    this.uploadService.getFiles(6);
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload)
        // .subscribe(
        //   percentage => {
        //     this.percentage = Math.round(percentage ? percentage : 0);
        //   },
        //   error => {
        //     console.log(error);
        //   }
        // );
      }
    }
  }
}
