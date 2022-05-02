import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUpload } from './file-upload';
import { finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private basePath = '/uploads';
  constructor(private firebase: AngularFireDatabase,private storage: AngularFireStorage) { }

  pushFileToStorage(fileUpload: FileUpload,): Observable<number | undefined> {
    console.log('here',fileUpload);

    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    // uploadTask.snapshotChanges().pipe(
    //   finalize(() => {
    //     storageRef.getDownloadURL().subscribe(downloadURL => {
    //       fileUpload.url = downloadURL;
    //       fileUpload.name = fileUpload.file.name;
    //       this.saveFileData(fileUpload);
    //     });
    //   })
    // ).subscribe();
    return uploadTask.percentageChanges();
  }
  getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.firebase.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }
  private saveFileData(fileUpload: FileUpload): void {
console.log('in service',fileUpload);

    this.firebase.list('/uploads').push(fileUpload);
  }
}
