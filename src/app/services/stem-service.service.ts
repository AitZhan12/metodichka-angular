import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {StemDto} from '../pages/engineering/stemDto';

@Injectable({
  providedIn: 'root'
})
export class StemServiceService {

  private baseUrl = 'http://localhost:8080/stem';
  constructor(private http: HttpClient) {
  }

  getData(): Observable<string> {
    return this.http.get(`${this.baseUrl}/getDesc`, {responseType: 'text'}
      );
  }

  save(stem: StemDto) {
    return this.http.post<StemDto>(`${this.baseUrl}/save`, stem);
  }
}
