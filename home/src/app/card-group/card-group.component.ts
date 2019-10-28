import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css'],
})
export class CardGroupComponent implements OnInit {
  @Input() title: String;
  @Input() content;
  constructor() { }

  ngOnInit() {
  }

  public getContent(){
    return this.content;
  }

}
