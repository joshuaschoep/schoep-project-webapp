import { Component, OnInit, Input } from '@angular/core';
import { ApplicationsServiceService } from '../applications-service.service';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css'],
})
export class CardGroupComponent implements OnInit {
  @Input() title: String;
  @Input() id;
  cards: Object;

  constructor(private apps: ApplicationsServiceService) {
    
  }

  ngOnInit() { 
    this.showCards();
  }

  showCards(){
    this.apps.getCards(this.id)
    .subscribe((data) => this.cards = data);
  }

  public getCards(){
    console.log(this.cards);
    return this.cards;
  }

}
