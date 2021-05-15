import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';

import {HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadFile} from '../../services/upload-file.service';
import {Books} from './books';
import {SimpleObject} from './SimpleObject';
import {formatDate} from '@angular/common';





@Component({templateUrl: './upload-file.component.html'})
export class UploadFileComponent implements OnInit {


  books: Observable<Books[]>;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  desc: string;
  grade: string;
  bookType: string;

  fileInfos: Observable<any>;
  bookTypes: SimpleObject[] = [];
  grades: SimpleObject[] = [];

  constructor(private insertService: UploadFile) {
  }

  ngOnInit() {
    this.fileInfos = this.insertService.getFiles();
    this.initTypes();
    this.initGrades();
  }

  reloadData() {
    this.books = this.insertService.getFiles();
  }

  deleteFile(id: number) {
    this.insertService.deleteFile(id).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
    this.reloadData();
  }

  selectedFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const formData: FormData = new FormData();
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    formData.append('file', this.currentFile);
    formData.append('desc', this.desc);
    formData.append('grade', this.grade);
    formData.append('type', this.bookType);
    this.insertService.uploadFile(formData).subscribe(event => {
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

  initTypes() {
    this.bookTypes.push(new SimpleObject(1, 'Иннжиниринг'));
    this.bookTypes.push(new SimpleObject(2, 'Бағдарламалау'));
    this.bookTypes.push(new SimpleObject(3, '3D модельдеу'));
    this.bookTypes.push(new SimpleObject(4, 'Робототехника'));
  }

  initGrades() {
    for ( let i = 1; i <= 11; i++  ) {
      this.grades.push(new SimpleObject(i, i + ' сынып'));
    }
  }
}
