import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';

import {HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadFile} from '../services/upload-file.service';




@Component({templateUrl: './upload-file.component.html'})
export class UploadFileComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private insertService: UploadFile) {
  }

  selectedFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.insertService.uploadFile(this.currentFile).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
        this.fileInfos = this.insertService.getFiles();
      }
    },
      err => {
      this.progress = 0;
      this.message = 'could not upload';
      this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }

  ngOnInit() {
    this.fileInfos = this.insertService.getFiles();
  }

}
