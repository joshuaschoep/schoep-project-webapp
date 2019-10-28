import { Component } from '@angular/core';
import { ApplicationsServiceService } from './applications-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home';
  application = {
    groups: []
  };

  constructor(private apps: ApplicationsServiceService) {
    this.showApps();
  }

  showApps(){
    this.apps.getApplications()
    .subscribe((data) => this.application = {
      groups: data['groups']

    });
  }

  public getApps(){
    return this.application;
  }
}
