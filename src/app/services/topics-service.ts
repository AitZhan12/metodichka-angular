import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {TopicsDto} from '../pages/topics/topicsDto';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  private baseUrl = 'http://localhost:8080/topics';
  apiRootUrl = environment.apiUrl + '/topics';
  apiRootUrlDownload = environment.apiUrl + '/file/download';
  private baseUrl2 = 'http://localhost:8080/file/download';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<TopicsDto[]> {
    return this.http.get<TopicsDto[]>(`${this.baseUrl}/all`);
  }

  public getThesisProg(id: number): Observable<string> {
    return this.http.get(`${this.baseUrl}/thesis/2/` + id,
      {responseType: 'text'});
  }

  public getThesisEng(id: number): Observable<string> {
    return this.http.get(`${this.baseUrl}/thesis/1/` + id,
      {responseType: 'text'});
  }

  public getThesisModel(id: number): Observable<string> {
    return this.http.get(`${this.baseUrl}/thesis/3/` + id,
      {responseType: 'text'});
  }

  public getThesisRobot(id: number): Observable<string> {
    return this.http.get(`${this.baseUrl}/thesis/4/` + id,
      {responseType: 'text'});
  }

  public save(topic: TopicsDto) {
    return this.http.post<TopicsDto>(`${this.baseUrl}/save`, topic);
  }

  public getProgramming() {
    return this.http.get<TopicsDto[]>(`${this.baseUrl}/category/` + 2);
  }

  public getEng() {
    return this.http.get<TopicsDto[]>(`${this.baseUrl}/category/` + 1);
  }

  public getModel() {
    return this.http.get<TopicsDto[]>(`${this.baseUrl}/category/` + 3);
  }

  public getRobot() {
    return this.http.get<TopicsDto[]>(`${this.baseUrl}/category/` + 4);
  }

  // download pdf
  public download(category: number, id: number): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(`${this.baseUrl2}/` + category + `/` + id,
      {responseType: 'blob'});
  }

  public downloadPr(id: number): Observable<Blob> {
    const headers = new HttpHeaders();
    return this.http.get(`${this.baseUrl2}/2/` + id,
      {headers, responseType: 'blob'});
  }

  public downloadMd(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl2}/3/` + id);
  }

  public downloadRo(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl2}/4/` + id);
  }

  // download pptx

  public downloadPptx(category: number, id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl2}/` + category + `/` + id,
      {responseType: 'blob'});
  }


}
