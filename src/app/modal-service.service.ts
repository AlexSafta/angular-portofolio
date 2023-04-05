import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project } from './models/project';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.baseUrl}/projects`, project);
  }
}

  

