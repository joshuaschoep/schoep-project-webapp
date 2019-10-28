import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsServiceService {
  applicationsUrl = 'assets/applications.conf.json';

  constructor(private http: HttpClient) { }

  getApplications() {
    return this.http.get(this.applicationsUrl);
  }
}
