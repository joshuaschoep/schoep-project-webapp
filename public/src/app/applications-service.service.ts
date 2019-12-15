import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getCards(group: number){
    console.log(this.cardsUrl(group));
    return this.http.get(this.cardsUrl(group));
  }
}
