import { Component, OnInit } from '@angular/core';
import { ApplicationsServiceService } from '../applications-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss'],
})
export class CardGroupComponent implements OnInit {
  cards: Object;
  id: number;
  title: string;

  constructor(
    private apps: ApplicationsServiceService,
    private route: ActivatedRoute)
  {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.apps.retrieveTitle(this.id).subscribe(x => this.title = <string>x);
    this.showCards();
    console.log(this.title);
  }

  showCards(){
    this.apps.getCards(this.id)
    .subscribe((data) => this.cards = data);
  }

  public getCards(){
    return this.cards;
  }

}
