import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addData(data: any) {
    return this.http.post(`${this.apiUrl}/data`, data);
  }
}
