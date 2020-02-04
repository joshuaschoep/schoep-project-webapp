import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsServiceService {
  groupsUrl = '/api/groups';
  cardsUrl = function(group: number){
    return "/api/g/" + group + "/cards";
  }


  constructor(private http: HttpClient) { }

  getGroups() {
    return this.http.get(this.groupsUrl);
  }

  retrieveTitle(id: number){
    return this.http.get(this.groupsUrl).pipe(find(value => value['id'] == id));   
  }

  getCards(group: number){
    return this.http.get(this.cardsUrl(group));
  }
}
