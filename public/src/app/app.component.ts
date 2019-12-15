import { Component } from '@angular/core';
import { ApplicationsServiceService } from './applications-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home';
  groups: Object;

  constructor(private apps: ApplicationsServiceService) {
    this.showGroups();
  }

  showGroups(){
    this.apps.getGroups()
    .subscribe((data) => this.groups = data);
  }

  public getGroups(){
    return this.groups;
  }
}
