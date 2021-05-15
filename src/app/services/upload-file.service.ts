import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Books} from '../pages/fileUpload/books';

@Injectable()
export class UploadFile {

  private baseUrl = 'http://localhost:8080/file';
  constructor(private http: HttpClient) {
  }

  uploadFile(formData: FormData): Observable<HttpEvent<any>> {
    // const formData: FormData = new FormData();
    //
    // formData.append('file', file);
    // formData.append('desc', desc);
    // formData.append('grade', grade.toString());

    const req = new HttpRequest(`POST`, `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    } );

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/download`);
  }

  deleteFile(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

}
